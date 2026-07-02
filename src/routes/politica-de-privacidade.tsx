import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const EFFECTIVE_DATE = "2 de julho de 2026";
const LAST_UPDATED = "2 de julho de 2026";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Clínica Olhar de Mãe" },
      {
        name: "description",
        content:
          "Política de Privacidade da Clínica Olhar de Mãe, em conformidade com a LGPD (Lei nº 13.709/2018). Saiba como coletamos, usamos e protegemos seus dados.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Política de Privacidade | Clínica Olhar de Mãe" },
      {
        property: "og:description",
        content:
          "Como a Clínica Olhar de Mãe coleta, utiliza, compartilha e protege seus dados pessoais, em conformidade com a LGPD.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-foreground/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Voltar ao início
          </Link>
          <span className="font-serif text-lg tracking-tight">Olhar de Mãe</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <article className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
              Documento legal
            </p>
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">
              Política de Privacidade
            </h1>
            <p className="text-sm text-foreground/60">
              <span className="font-medium text-foreground/80">Data de vigência:</span>{" "}
              {EFFECTIVE_DATE} · <span className="font-medium text-foreground/80">Última atualização:</span>{" "}
              {LAST_UPDATED}
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              A <strong>Consultório de Pediatria Olhar de Mãe LTDA</strong> ("Clínica Olhar de
              Mãe", "nós") tem o compromisso de proteger a privacidade e os dados pessoais de
              pacientes, responsáveis legais e visitantes do nosso site. Esta Política descreve
              como tratamos seus dados pessoais em conformidade com a{" "}
              <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD)</strong>.
            </p>
          </div>

          <Section title="1. Quem somos">
            <ul className="space-y-1 text-foreground/80">
              <li>
                <strong>Razão Social:</strong> Consultório de Pediatria Olhar de Mãe LTDA
              </li>
              <li>
                <strong>Nome Fantasia:</strong> Clínica Olhar de Mãe
              </li>
              <li>
                <strong>CNPJ:</strong> 20.646.529/0001-94
              </li>
              <li>
                <strong>Endereço:</strong> Rua São Francisco, 622A – Centro – Montes Claros/MG –
                CEP 39400-048
              </li>
              <li>
                <strong>E-mail:</strong>{" "}
                <a
                  className="underline underline-offset-4 hover:text-foreground"
                  href="mailto:admolhardemae@gmail.com"
                >
                  admolhardemae@gmail.com
                </a>
              </li>
              <li>
                <strong>Telefones:</strong> (38) 3083-2343 (consultas) · (38) 98827-1373
                (vacinação)
              </li>
              <li>
                <strong>Instagram:</strong>{" "}
                <a
                  className="underline underline-offset-4 hover:text-foreground"
                  href="https://instagram.com/clinicaolhardemae"
                  target="_blank"
                  rel="noreferrer"
                >
                  @clinicaolhardemae
                </a>
              </li>
            </ul>
          </Section>

          <Section title="2. Sobre nossos serviços">
            <p>
              A Clínica Olhar de Mãe é uma clínica pediátrica localizada em Montes Claros/MG que
              oferece atendimento pediátrico 24 horas, vacinação, acompanhamento do
              desenvolvimento infantil e mais de 20 especialidades voltadas ao cuidado de
              crianças, adolescentes e suas famílias.
            </p>
            <p>
              Nossos serviços são prestados <strong>exclusivamente no território brasileiro</strong>
              , destinados prioritariamente ao público infantil, sempre com a intermediação e o
              consentimento dos pais ou responsáveis legais.
            </p>
          </Section>

          <Section title="3. Dados pessoais que coletamos">
            <p>Podemos coletar as seguintes categorias de dados pessoais:</p>
            <SubSection title="3.1. Dados de identificação e contato">
              <ul className="list-disc space-y-1 pl-6">
                <li>Nome completo do paciente e do responsável legal</li>
                <li>E-mail</li>
                <li>Telefone e número de WhatsApp</li>
                <li>CPF e RG</li>
                <li>Data de nascimento</li>
                <li>Endereço residencial</li>
              </ul>
            </SubSection>
            <SubSection title="3.2. Dados sensíveis de saúde">
              <p>
                Para viabilizar o atendimento clínico, coletamos dados considerados sensíveis pela
                LGPD (art. 5º, II), tais como:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Histórico médico e antecedentes clínicos</li>
                <li>Sintomas, diagnósticos e prescrições</li>
                <li>Carteira de vacinação e imunizações realizadas</li>
                <li>Informações do plano de saúde/convênio</li>
                <li>Prontuário eletrônico</li>
              </ul>
            </SubSection>
            <SubSection title="3.3. Dados de navegação">
              <ul className="list-disc space-y-1 pl-6">
                <li>Endereço IP</li>
                <li>Cookies e identificadores de dispositivo</li>
                <li>Páginas acessadas, tempo de navegação e origem do acesso</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="4. Finalidades do tratamento">
            <ul className="list-disc space-y-1 pl-6">
              <li>Agendamento de consultas, retornos e procedimentos</li>
              <li>Prestação da assistência médica e execução do atendimento clínico</li>
              <li>Emissão de prontuários, receitas, atestados e relatórios médicos</li>
              <li>Autorização e faturamento junto a operadoras de planos de saúde</li>
              <li>Comunicação com pacientes e responsáveis (WhatsApp, e-mail, telefone)</li>
              <li>Envio de lembretes de consultas e reforços vacinais</li>
              <li>Cumprimento de obrigações legais, regulatórias e sanitárias</li>
              <li>Melhoria contínua dos serviços e da experiência no site</li>
              <li>Prevenção a fraudes e garantia da segurança das informações</li>
            </ul>
          </Section>

          <Section title="5. Bases legais (LGPD)">
            <p>Realizamos o tratamento de dados com fundamento nas seguintes bases legais:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>Execução de contrato</strong> (art. 7º, V) – prestação dos serviços de
                saúde contratados.
              </li>
              <li>
                <strong>Cumprimento de obrigação legal ou regulatória</strong> (art. 7º, II) –
                guarda de prontuários, notificações compulsórias, exigências do CFM, CRM e
                ANVISA.
              </li>
              <li>
                <strong>Tutela da saúde</strong> (art. 11, II, "f") – tratamento de dados
                sensíveis por profissionais e serviços de saúde.
              </li>
              <li>
                <strong>Consentimento</strong> (arts. 7º, I e 11, I) – ações de comunicação,
                lembretes e uso de cookies não essenciais.
              </li>
              <li>
                <strong>Legítimo interesse</strong> (art. 7º, IX) – segurança da informação e
                melhoria dos serviços.
              </li>
            </ul>
          </Section>

          <Section title="6. Compartilhamento de dados">
            <p>Seus dados podem ser compartilhados, de forma restrita e segura, com:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>Operadoras de planos de saúde e convênios</strong>, para autorização e
                faturamento dos atendimentos.
              </li>
              <li>
                <strong>WhatsApp Business / Meta Platforms</strong>, para viabilizar a
                comunicação e o agendamento por mensagens.
              </li>
              <li>
                <strong>Provedores de nuvem e sistemas de prontuário eletrônico</strong>,
                contratados para hospedagem e gestão das informações clínicas.
              </li>
              <li>
                <strong>Autoridades públicas e órgãos reguladores</strong>, quando exigido por lei
                ou ordem judicial.
              </li>
            </ul>
            <p>
              Exigimos de todos os nossos parceiros a adoção de padrões de segurança compatíveis
              com a LGPD. <strong>Não comercializamos dados pessoais.</strong>
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Utilizamos cookies e tecnologias semelhantes para garantir o funcionamento do site,
              analisar o uso e melhorar sua experiência. As categorias utilizadas são:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>Cookies essenciais:</strong> necessários para o funcionamento do site e
                para a navegação segura.
              </li>
              <li>
                <strong>Cookies de análise:</strong> permitem medir o desempenho do site e
                entender como os visitantes interagem com nossas páginas.
              </li>
              <li>
                <strong>Cookies de marketing:</strong> podem ser utilizados para veicular
                conteúdos relevantes e mensurar campanhas em plataformas parceiras.
              </li>
              <li>
                <strong>Cookies de preferência:</strong> armazenam configurações escolhidas pelo
                usuário para melhorar a experiência de navegação.
              </li>
            </ul>
            <p>
              Você pode gerenciar ou desativar os cookies diretamente nas configurações do seu
              navegador. A desativação de cookies essenciais pode comprometer o funcionamento do
              site.
            </p>
          </Section>

          <Section title="8. Direitos do titular">
            <p>Nos termos do art. 18 da LGPD, você pode, a qualquer momento, solicitar:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Confirmação da existência de tratamento de seus dados</li>
              <li>Acesso aos dados</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>
                Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em
                desconformidade
              </li>
              <li>Portabilidade dos dados a outro fornecedor de serviço</li>
              <li>
                Eliminação dos dados tratados com base no consentimento, ressalvadas as hipóteses
                legais de guarda
              </li>
              <li>Informação sobre entidades públicas e privadas com as quais compartilhamos dados</li>
              <li>Informação sobre a possibilidade de não fornecer consentimento e suas consequências</li>
              <li>Revogação do consentimento</li>
              <li>
                Apresentação de reclamação à{" "}
                <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>
              </li>
            </ul>
            <p>
              As solicitações podem ser enviadas para{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href="mailto:admolhardemae@gmail.com"
              >
                admolhardemae@gmail.com
              </a>
              .
            </p>
          </Section>

          <Section title="9. Retenção dos dados">
            <p>
              Os dados pessoais são mantidos pelo tempo necessário ao cumprimento das finalidades
              para as quais foram coletados, observando os prazos legais aplicáveis, em especial:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>Prontuários médicos:</strong> mínimo de 20 anos a partir do último
                atendimento, conforme Resolução CFM nº 1.821/2007 e legislação sanitária.
              </li>
              <li>
                <strong>Documentos fiscais e contábeis:</strong> pelos prazos definidos pela
                legislação tributária.
              </li>
              <li>
                <strong>Dados de contato e marketing:</strong> enquanto perdurar o
                relacionamento ou até a revogação do consentimento.
              </li>
            </ul>
          </Section>

          <Section title="10. Segurança da informação">
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados
              contra acessos não autorizados, perdas, alterações ou destruições indevidas, tais
              como:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Controle de acesso restrito a profissionais autorizados</li>
              <li>Uso de sistemas de prontuário eletrônico com autenticação e criptografia</li>
              <li>Sigilo profissional imposto a toda a equipe clínica e administrativa</li>
              <li>Ambientes de armazenamento em nuvem contratados com fornecedores reconhecidos</li>
              <li>Monitoramento e atualização periódica dos sistemas</li>
            </ul>
            <p>
              Apesar dos nossos esforços, nenhum sistema é totalmente inviolável. Em caso de
              incidente de segurança relevante, comunicaremos os titulares e a ANPD nos termos da
              LGPD.
            </p>
          </Section>

          <Section title="11. Transferência internacional de dados">
            <p>
              Alguns de nossos fornecedores de tecnologia (como provedores de nuvem e plataformas
              de mensagens) podem armazenar dados em servidores localizados fora do Brasil. Nesses
              casos, exigimos que a transferência ocorra em conformidade com o art. 33 da LGPD,
              adotando salvaguardas adequadas para garantir nível de proteção equivalente ao da
              legislação brasileira.
            </p>
          </Section>

          <Section title="12. Privacidade de crianças e adolescentes">
            <p>
              Considerando que somos uma clínica pediátrica, tratamos dados de crianças e
              adolescentes de forma cuidadosa e sempre no <strong>melhor interesse do menor</strong>
              , conforme art. 14 da LGPD.
            </p>
            <p>
              O tratamento de dados de menores é realizado exclusivamente com o{" "}
              <strong>consentimento específico e destacado dos pais ou responsáveis legais</strong>
              , ou nas demais hipóteses legais que resguardem a saúde da criança.
            </p>
          </Section>

          <Section title="13. Alterações desta Política">
            <p>
              Esta Política pode ser atualizada periodicamente para refletir mudanças legais,
              regulatórias ou em nossos processos. A versão vigente estará sempre disponível
              nesta página, com a data da última atualização em destaque. Alterações
              significativas poderão ser comunicadas por e-mail ou por aviso no site.
            </p>
          </Section>

          <Section title="14. Contato do Encarregado (DPO)">
            <p>
              Para exercer seus direitos, esclarecer dúvidas ou tratar de qualquer assunto
              relacionado à proteção de dados, entre em contato com nosso Encarregado pelo
              Tratamento de Dados Pessoais:
            </p>
            <ul className="space-y-1">
              <li>
                <strong>E-mail:</strong>{" "}
                <a
                  className="underline underline-offset-4 hover:text-foreground"
                  href="mailto:admolhardemae@gmail.com"
                >
                  admolhardemae@gmail.com
                </a>
              </li>
              <li>
                <strong>Telefone:</strong> (38) 3083-2343
              </li>
              <li>
                <strong>Endereço:</strong> Rua São Francisco, 622A – Centro – Montes Claros/MG –
                CEP 39400-048
              </li>
            </ul>
          </Section>

          <div className="border-t border-foreground/10 pt-8 text-sm text-foreground/60">
            Ao continuar utilizando nossos serviços e nosso site, você declara estar ciente desta
            Política de Privacidade.
          </div>
        </article>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
      <div className="space-y-3 leading-relaxed text-foreground/80">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <div className="space-y-2 text-foreground/80">{children}</div>
    </div>
  );
}
