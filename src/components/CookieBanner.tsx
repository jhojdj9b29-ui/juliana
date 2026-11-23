import { useEffect, useState } from "react";

const CONSENT_KEY = "cookie-consent";

type ConsentChoice = "granted" | "denied";

const GRANTED_CONSENT = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
} as const;

const DENIED_CONSENT = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
} as const;

declare global {
  interface Window {
    dataLayer?: Array<unknown>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieBanner() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pendingChoice, setPendingChoice] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    let savedChoice: string | null = null;

    try {
      savedChoice = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      savedChoice = null;
    }

    setVisible(savedChoice !== "granted" && savedChoice !== "denied");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const handleManageCookies = () => {
      if (window.location.hash !== "#gerenciar-cookies") return;
      setVisible(true);
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    };

    window.addEventListener("hashchange", handleManageCookies);

    if (window.location.hash === "#gerenciar-cookies") {
      setVisible(true);
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    return () => {
      window.removeEventListener("hashchange", handleManageCookies);
    };
  }, [ready]);

  useEffect(() => {
    if (!pendingChoice) return;

    const granted = pendingChoice === "granted";
    const consent = granted ? GRANTED_CONSENT : DENIED_CONSENT;

    try {
      window.localStorage.setItem(CONSENT_KEY, pendingChoice);
    } catch {
      // Keep the in-memory decision even if browser storage is unavailable.
    }

    window.gtag?.("consent", "update", consent);

    if (granted) {
      window.dataLayer?.push({ event: "cookie_consent_granted" });
    }

    setVisible(false);
    setPendingChoice(null);
  }, [pendingChoice]);

  if (!ready || !visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-4xl">
      <section
        role="dialog"
        aria-label="Consentimento de cookies"
        aria-modal="false"
        className="rounded-[1.75rem] border border-primary/20 bg-[#241A12]/95 p-5 shadow-elegant backdrop-blur-xl sm:p-6"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl text-foreground sm:text-2xl">
              Cookies e privacidade
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Usamos cookies e tecnologias semelhantes para melhorar sua experiência e, com seu
              consentimento, para anúncios e métricas. Você pode conhecer os detalhes na{" "}
              <a
                href="/politica-de-privacidade"
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
              >
                Política de Privacidade
              </a>
              .
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => setPendingChoice("granted")}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={() => setPendingChoice("denied")}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Recusar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
