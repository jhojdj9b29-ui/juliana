import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/SectionLabel";

const title = "Política de Privacidade | Juliana Janjob";
const description =
  "Informações sobre tratamento de dados pessoais, cookies, pixels, consentimento e direitos do titular.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-10">
          <SectionLabel num="08" label="Privacidade" />

          <h1 className="font-display mt-8 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Política de Privacidade
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Esta política explica, de forma clara e transparente, como dados pessoais podem ser
            tratados durante a navegação neste site e no contato para atendimento psicológico.
          </p>

          <div className="mt-16 space-y-12 text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                1. Quem é o responsável pelo tratamento
              </h2>
              <p className="mt-5">
                Controlador dos dados: <strong className="text-foreground">Juliana Alves da Silva Janjob</strong>.
                <br />
                E-mail: <strong className="text-foreground">jujanjobpsi@gmail.com</strong>.
                <br />
                Telefone/WhatsApp: <strong className="text-foreground">(69) 99616-05498</strong>.
                <br />
                Endereço profissional: <strong className="text-foreground">Av. Paraná, 105 - Novo Horizonte, Cacoal - RO, CEP 76962-083</strong>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                2. Quais dados podem ser coletados
              </h2>
              <p className="mt-5">
                Dependendo da interação com o site, podem ser tratados dados fornecidos voluntariamente
                pelo visitante, como nome, telefone/WhatsApp, e-mail e conteúdo de mensagens enviadas
                para solicitar atendimento. Também podem ser registrados dados técnicos de navegação,
                como endereço IP, dispositivo, navegador, páginas acessadas, data e horário e eventos
                relacionados à utilização do site.
              </p>
              <p className="mt-4">
                O site também pode armazenar localmente, no navegador, respostas de questionários de
                autoconhecimento para preservar o progresso do visitante. Essas respostas não são
                enviadas automaticamente ao servidor pelo fluxo atual do site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                3. Para que os dados são utilizados
              </h2>
              <p className="mt-5">
                Os dados podem ser utilizados para responder solicitações de contato e agendamento,
                prestar e organizar o atendimento solicitado, melhorar a experiência do site, manter
                a segurança e estabilidade da aplicação, compreender o uso das páginas e, quando houver
                consentimento, realizar mensuração, publicidade e remarketing.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                4. Cookies, pixels e tecnologias semelhantes
              </h2>
              <p className="mt-5">
                O site utiliza o Google Tag Manager para organizar tags de terceiros. O uso de tecnologias
                de análise, publicidade e remarketing é condicionado ao consentimento do visitante por
                meio do banner de cookies e do Google Consent Mode.
              </p>
              <p className="mt-4">
                Mediante consentimento, poderão ser configuradas no Google Tag Manager ferramentas e
                pixels do Google e da Meta para mensuração de campanhas, construção de públicos e
                remarketing. Nenhum pixel da Meta ou tag de Google Ads é carregado diretamente pelo
                código deste site; essas integrações, quando utilizadas, devem ser configuradas no
                Google Tag Manager com os requisitos de consentimento correspondentes.
              </p>
              <p className="mt-4">
                Tecnologias estritamente necessárias ao funcionamento do site podem ser utilizadas para
                fornecer o serviço solicitado. Tecnologias opcionais de análise e publicidade ficam
                desativadas quando o visitante recusa o consentimento.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                5. Compartilhamento e terceiros
              </h2>
              <p className="mt-5">
                Quando aplicável, dados podem ser tratados por fornecedores de hospedagem, infraestrutura,
                mensuração, comunicação, publicidade ou outras ferramentas utilizadas para operar o site.
                Esses terceiros devem tratar os dados conforme suas próprias políticas e os instrumentos
                aplicáveis ao tratamento. A lista exata de fornecedores poderá ser atualizada conforme as
                ferramentas efetivamente contratadas e configuradas.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                6. Como retirar ou alterar o consentimento
              </h2>
              <p className="mt-5">
                Você pode recusar os cookies opcionais no banner inicial ou alterar sua escolha a qualquer
                momento pelo link <strong className="text-foreground">“Gerenciar cookies”</strong> disponível
                no rodapé do site. Ao alterar a preferência, o site atualiza o estado de consentimento
                utilizado pelas tags gerenciadas pelo Google Tag Manager.
              </p>
              <p className="mt-4">
                A retirada do consentimento não afeta a legalidade dos tratamentos realizados anteriormente
                com base no consentimento. Dependendo da tecnologia de terceiros, pode ser necessário
                apagar cookies e dados armazenados no navegador para interromper identificadores já salvos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                7. Direitos do titular pela LGPD
              </h2>
              <p className="mt-5">
                Nos termos da Lei Geral de Proteção de Dados Pessoais (LGPD), o titular pode solicitar,
                observados os requisitos e limites legais aplicáveis, informações sobre o tratamento de seus
                dados, confirmação da existência de tratamento, acesso aos dados, correção de dados
                incompletos ou inexatos, anonimização, bloqueio ou eliminação de dados quando cabível,
                portabilidade, informações sobre compartilhamento, revisão de decisões automatizadas nas
                hipóteses legais e revogação do consentimento, entre outros direitos previstos em lei.
              </p>
              <p className="mt-4">
                Para exercer seus direitos, entre em contato pelos dados indicados nesta política. As
                solicitações serão analisadas e respondidas conforme os prazos e procedimentos aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                8. Segurança e retenção
              </h2>
              <p className="mt-5">
                São adotadas medidas técnicas e administrativas razoáveis para proteger os dados pessoais
                contra acessos não autorizados, perda, alteração ou uso indevido. Os dados são mantidos
                pelo período necessário para cumprir as finalidades informadas, obrigações legais, exercício
                regular de direitos ou outras bases legais aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                9. Atualizações desta política
              </h2>
              <p className="mt-5">
                Esta política pode ser atualizada quando houver mudanças no site, nas ferramentas utilizadas
                ou nas finalidades de tratamento. Recomenda-se consultar esta página periodicamente para
                acompanhar as versões mais recentes.
              </p>
            </section>

            <section className="rounded-[2rem] border border-primary/20 bg-card/40 p-8 shadow-soft">
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                10. Contato
              </h2>
              <p className="mt-5">
                Para dúvidas sobre privacidade, solicitações relacionadas aos seus dados pessoais ou
                exercício de direitos do titular, utilize:
              </p>
              <p className="mt-4 text-foreground">
                <strong>Juliana Alves da Silva Janjob</strong>
                <br />
                jujanjobpsi@gmail.com
                <br />
                (69) 99616-05498
              </p>
            </section>
          </div>

          <p className="mt-16 border-t border-border/20 pt-6 text-xs leading-relaxed text-muted-foreground/70">
            Última atualização: 05/10/2026.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
