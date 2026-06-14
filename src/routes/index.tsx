import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Stethoscope,
  Syringe,
  Moon,
  Dna,
  Home,
  Baby,
  Target,
  Sparkles,
  Brain,
  Users,
  ShieldCheck,
  MessageCircle,
  Calendar,
  ArrowRight,
  Quote,
  MapPin,
  Phone,
  Camera,
  Globe,
} from "lucide-react";

import logoAsset from "@/assets/logo-olhar-de-mae.jpeg.asset.json";
import heroAsset from "@/assets/corpo-clinico.jpeg.asset.json";
import storyAsset from "@/assets/confraternizacao.jpeg.asset.json";
import mamaru from "@/assets/mamaru.png";
import spaceReceptionAsset from "@/assets/recepcao-logo.jpeg.asset.json";
import spaceTeamAsset from "@/assets/equipe-recepcao.jpeg.asset.json";
import spaceVacinasAsset from "@/assets/coracao-vacina.jpeg.asset.json";
import spaceHallwayAsset from "@/assets/corredor.jpeg.asset.json";
import spaceEntradaAsset from "@/assets/entrada.jpeg.asset.json";
import spaceCentroAsset from "@/assets/equipe-centro-azul.jpeg.asset.json";
import spaceVermelhoAsset from "@/assets/equipe-vermelho.jpeg.asset.json";

const heroDanielly = heroAsset.url;
const motherDaughter = storyAsset.url;
const spaceReception = spaceReceptionAsset.url;
const spaceDogBed = spaceTeamAsset.url;
const spaceVacinas = spaceVacinasAsset.url;
const spacePlayground = spaceHallwayAsset.url;
const spaceEntrada = spaceEntradaAsset.url;
const spaceCentro = spaceCentroAsset.url;
const spaceVermelho = spaceVermelhoAsset.url;
const logoUrl = logoAsset.url;

const WHATSAPP_VACINA_URL = "https://wa.me/5538988271373";
const WHATSAPP_CONSULTA_URL = "https://wa.me/553830832343";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Olhar de Mãe | Pediatria 24h e Vacinação em Montes Claros" },
      {
        name: "description",
        content:
          "Há 11 anos cuidando de quem você mais ama. Pediatria 24h, vacinação, desenvolvimento infantil e mais de 20 especialidades em Montes Claros - MG.",
      },
      {
        name: "keywords",
        content:
          "pediatra em Montes Claros, clínica pediátrica Montes Claros, vacinação em Montes Claros, pediatra 24 horas Montes Claros, clínica infantil Montes Claros, desenvolvimento infantil Montes Claros, psicologia infantil Montes Claros, neuropsicologia infantil Montes Claros",
      },
      { property: "og:title", content: "Clínica Olhar de Mãe | Pediatria 24h em Montes Claros" },
      {
        property: "og:description",
        content:
          "Há 11 anos cuidando de quem você mais ama. Um espaço criado para oferecer proteção, segurança e tranquilidade para toda a família.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Clínica Olhar de Mãe",
          description:
            "Clínica pediátrica com atendimento 24h, vacinação e equipe multidisciplinar em Montes Claros - MG.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Montes Claros",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          medicalSpecialty: ["Pediatrics", "Vaccination", "ChildDevelopment"],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Story />
      <Mamaru />
      <Space />
      <Services />
      <WhyUs />
      <Numbers />
      <MissionVisionValues />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Nav                                                                         */
/* -------------------------------------------------------------------------- */
function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-foreground/5 bg-background/80 px-6 py-4 backdrop-blur-md">
      <a href="#" className="flex items-center gap-3">
        <img src={logoUrl} alt="Logomarca Olhar de Mãe" className="h-10 w-auto" />
      </a>
      <div className="hidden gap-8 text-xs font-medium uppercase tracking-widest md:flex">
        <a href="#historia" className="transition-colors hover:text-primary">
          Nossa História
        </a>
        <a href="#servicos" className="transition-colors hover:text-primary">
          Serviços
        </a>
        <a href="#espaco" className="transition-colors hover:text-primary">
          O Espaço
        </a>
        <a href="#contato" className="transition-colors hover:text-primary">
          Contato
        </a>
      </div>
      <a
        href={WHATSAPP_CONSULTA_URL}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-foreground px-5 py-2 text-xs font-bold uppercase tracking-wider text-background transition-all hover:bg-primary"
      >
        Agendar Consulta
      </a>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <header className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20 pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-reveal">
          <div className="mb-6 inline-block rounded-full bg-peach px-3 py-1 text-[10px] font-bold uppercase italic tracking-[0.2em] text-primary">
            Há 11 anos cuidando de quem você ama
          </div>
          <h1 className="mb-8 text-balance font-serif text-5xl leading-[1.05] md:text-7xl">
            Há 11 anos cuidando de{" "}
            <span className="italic text-primary">quem você mais ama.</span>
          </h1>
          <p className="mb-10 max-w-[48ch] text-lg leading-relaxed text-muted">
            Referência em pediatria, vacinação e atendimento multidisciplinar em Montes Claros. Um
            espaço criado para oferecer proteção, segurança e tranquilidade para toda a família.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-105"
            >
              <Calendar className="size-4" />
              Agendar Consulta
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full border border-foreground/10 px-8 py-4 font-semibold transition-colors hover:bg-peach"
            >
              <MessageCircle className="size-4" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-foreground/5 pt-8 md:grid-cols-4">
            {[
              ["11+ Anos", "De História"],
              ["24 Horas", "Pediatria"],
              ["20+ Esp.", "Multidisciplinar"],
              ["Regional", "Ref. Vacinação"],
            ].map(([label, sub]) => (
              <div key={label}>
                <span className="block font-mono text-sm text-primary">{label}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-60">{sub}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-reveal relative [animation-delay:200ms]">
          <img
            src={heroDanielly}
            alt="Dra. Danielly e o corpo clínico da Clínica Olhar de Mãe"
            width={1600}
            height={1067}
            className="aspect-[4/5] w-full rounded-[40px] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 max-w-xs rounded-[32px] bg-sage p-8 text-white shadow-xl">
            <Quote className="mb-3 size-5 opacity-60" />
            <p className="text-sm italic leading-relaxed">
              "Cuidar de uma criança é proteger o futuro."
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Story                                                                       */
/* -------------------------------------------------------------------------- */
function Story() {
  return (
    <section id="historia" className="bg-foreground px-6 py-32 text-background">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4 opacity-40">
          <div className="h-px flex-1 bg-background" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">O Legado</span>
          <div className="h-px flex-1 bg-background" />
        </div>

        <h2 className="mb-20 text-center font-serif text-4xl italic md:text-6xl">
          Antes de existir a Clínica, existia um sonho.
        </h2>

        <div className="space-y-16 text-lg font-light leading-relaxed text-background/80 md:text-2xl">
          <p className="text-balance">
            Antes de existir a Clínica Olhar de Mãe, existia um sonho compartilhado entre mãe e
            filha. Durante a formação médica da Dra. Danielly, sua mãe recebeu o diagnóstico de
            câncer gástrico. Foi nesse momento que a vida mostrou um novo propósito: ao invés da
            cirurgia infantil, surgiu a pediatria.
          </p>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <img
              src={motherDaughter}
              alt="Dra. Danielly em momento de confraternização com a equipe da clínica"
              loading="lazy"
              width={1600}
              height={1067}
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
            <p className="font-serif text-2xl italic md:text-3xl">
              "Ela visualizou cada consultório, a brinquedoteca, a sala de vacinas, o futuro...
              mesmo sem saber se estaria lá para ver."
            </p>
          </div>

          <p className="text-balance">
            Mesmo enfrentando a doença, sua mãe participou de cada etapa da construção. Em setembro
            de 2014 a clínica ficou pronta. Dias depois ela partiu, deixando um legado que continua
            vivo em cada olhar, em cada abraço, em cada família acolhida.
          </p>

          <p className="text-balance font-serif italic text-primary">
            A Clínica Olhar de Mãe nasceu de um sonho, foi construída com amor e segue crescendo
            com o propósito de cuidar de cada criança e cada família com o mesmo carinho de um
            olhar de mãe.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Mamaru                                                                      */
/* -------------------------------------------------------------------------- */
function Mamaru() {
  return (
    <section className="relative overflow-hidden bg-peach/30 px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto size-72 rounded-full bg-sage/20 p-8 md:size-96 md:p-12">
            <img
              src={mamaru}
              alt="Mamarú, a mascote canguru da Clínica Olhar de Mãe"
              loading="lazy"
              width={800}
              height={800}
              className="size-full object-contain"
            />
            <div className="absolute -right-4 -top-4 flex size-24 rotate-12 items-center justify-center rounded-full bg-primary p-4 text-center text-[10px] font-bold uppercase leading-tight text-white">
              A mascote da proteção
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            Conheça a Mamarú
          </span>
          <h3 className="mb-8 font-serif text-5xl">O abraço que protege.</h3>
          <p className="mb-8 text-lg leading-relaxed text-muted">
            A Mamarú representa tudo aquilo que acreditamos. Assim como o canguru acolhe e protege
            seu filhote na bolsa, nossa missão é acolher, proteger e acompanhar cada família em sua
            jornada. Ela simboliza carinho, segurança, desenvolvimento e amor.
          </p>
          <ul className="space-y-4">
            {[
              "Carinho e Acolhimento",
              "Proteção em todas as fases",
              "Desenvolvimento Pleno",
              "Segurança em cada passo",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 font-medium text-foreground/80">
                <div className="size-2 rounded-full bg-sage" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Space                                                                       */
/* -------------------------------------------------------------------------- */
function Space() {
  return (
    <section id="espaco" className="bg-foreground py-32 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-4 font-serif text-5xl italic">Onde a magia acontece.</h2>
          <p className="text-background/60">
            Cada detalhe foi pensado para transformar o atendimento médico em uma experiência leve,
            acolhedora e inesquecível.
          </p>
        </div>

        <div className="grid h-[800px] grid-cols-12 gap-4">
          <figure className="col-span-12 lg:col-span-8">
            <img
              src={spaceReception}
              alt="Recepção da Clínica Olhar de Mãe"
              loading="lazy"
              width={1280}
              height={960}
              className="size-full rounded-[40px] object-cover"
            />
          </figure>
          <div className="col-span-12 flex h-full flex-col gap-4 lg:col-span-4">
            <figure className="h-1/2">
              <img
                src={spaceDogBed}
                alt="Equipe da Olhar de Mãe na recepção"
                loading="lazy"
                width={1600}
                height={1067}
                className="size-full rounded-[40px] object-cover"
              />
            </figure>
            <div className="flex h-1/2 flex-col justify-end rounded-[40px] bg-sage p-8">
              <h4 className="mb-2 font-serif text-2xl">Sala de Vacinas com Carinho</h4>
              <p className="text-xs leading-relaxed opacity-80">
                Transformamos a vacinação em um momento leve, acolhedor e sem medo —
                feito com o coração.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4">
          <figure className="col-span-12 md:col-span-6">
            <img
              src={spaceVacinas}
              alt="Sala de vacinas Olhar de Mãe"
              loading="lazy"
              width={828}
              height={552}
              className="aspect-[4/3] w-full rounded-[40px] object-cover"
            />
          </figure>
          <figure className="col-span-12 md:col-span-6">
            <img
              src={spacePlayground}
              alt="Corredor temático com arco-íris e amarelinha"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full rounded-[40px] object-cover"
            />
          </figure>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4">
          <figure className="col-span-12 md:col-span-4">
            <img
              src={spaceEntrada}
              alt="Entrada da Clínica Olhar de Mãe com arco-íris"
              loading="lazy"
              width={720}
              height={960}
              className="aspect-[3/4] w-full rounded-[40px] object-cover"
            />
          </figure>
          <figure className="col-span-12 md:col-span-4">
            <img
              src={spaceCentro}
              alt="Equipe Olhar de Mãe no salão central colorido"
              loading="lazy"
              width={720}
              height={960}
              className="aspect-[3/4] w-full rounded-[40px] object-cover"
            />
          </figure>
          <figure className="col-span-12 md:col-span-4">
            <img
              src={spaceVermelho}
              alt="Equipe Olhar de Mãe vestida de vermelho"
              loading="lazy"
              width={1600}
              height={1067}
              className="aspect-[3/4] w-full rounded-[40px] object-cover"
            />
          </figure>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            "Área instagramável",
            "Brinquedoteca completa",
            "Piscina de bolinhas",
            "Parede de escalada",
            "Árvore iluminada",
            "Corredor para desenhos",
            "Macas em formato de cachorro",
            "Sala de vacinas espacial",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-background/10 p-4 text-sm text-background/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */
const services = [
  {
    code: "24h",
    title: "Pediatria 24 Horas",
    desc: "Única clínica da região com atendimento pediátrico disponível a qualquer hora do dia ou da noite.",
    icon: Moon,
  },
  {
    code: "VAC",
    title: "Vacinação Especializada",
    desc: "Atendimento na clínica, em empresas ou em domicílio. Protocolos completos com sala temática.",
    icon: Syringe,
  },
  {
    code: "DEV",
    title: "Desenvolvimento Infantil",
    desc: "Psicologia, neuropsicologia, fonoaudiologia e psicopedagogia integradas em um só lugar.",
    icon: Brain,
  },
  {
    code: "NEO",
    title: "Sala de Parto",
    desc: "Assistência pediátrica neonatal qualificada para acolher seu bebê desde o primeiro instante.",
    icon: Baby,
  },
  {
    code: "ESP",
    title: "Especialidades Médicas",
    desc: "Mais de 20 especialidades para atender toda a família, da gestação à vida adulta.",
    icon: Stethoscope,
  },
  {
    code: "MUL",
    title: "Equipe Multidisciplinar",
    desc: "Pediatras, terapeutas e profissionais reunidos em um modelo de cuidado integral.",
    icon: Users,
  },
];

function Services() {
  return (
    <section id="servicos" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-serif text-5xl">Soluções para sua família</h2>
          <p className="text-muted">
            Da gestação à vida adulta, suporte médico completo e humanizado.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ code, title, desc, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-[40px] border border-foreground/5 bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-8 flex size-16 items-center justify-center rounded-2xl bg-peach text-primary">
                <Icon className="size-7" />
              </div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary/70">
                {code}
              </div>
              <h3 className="mb-4 font-serif text-2xl">{title}</h3>
              <p className="mb-8 text-sm leading-relaxed text-muted">{desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition-all group-hover:gap-4"
              >
                Saiba mais <ArrowRight className="size-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* WhyUs                                                                       */
/* -------------------------------------------------------------------------- */
const whyUs = [
  { icon: Heart, label: "Atendimento Humanizado" },
  { icon: Users, label: "Equipe Multidisciplinar" },
  { icon: Syringe, label: "Vacinação Especializada" },
  { icon: Moon, label: "Pediatria 24h" },
  { icon: Dna, label: "Testes Genéticos" },
  { icon: Home, label: "Fototerapia Domiciliar" },
  { icon: Baby, label: "Consultoria em Amamentação" },
  { icon: Target, label: "Diagnóstico Precoce" },
];

function WhyUs() {
  return (
    <section className="bg-peach/40 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            Diferenciais
          </span>
          <h2 className="font-serif text-5xl">Por que escolher a Olhar de Mãe?</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {whyUs.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-3xl border border-foreground/5 bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="mb-6 size-7 text-primary" strokeWidth={1.5} />
              <p className="font-serif text-xl leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Numbers                                                                     */
/* -------------------------------------------------------------------------- */
const numbers = [
  { value: "11", label: "Anos de história" },
  { value: "20+", label: "Especialidades" },
  { value: "11", label: "Pediatras" },
  { value: "24h", label: "Pronto atendimento" },
  { value: "+1k", label: "Famílias atendidas" },
  { value: "#1", label: "Referência regional em vacinação" },
];

function Numbers() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            Números
          </span>
          <h2 className="font-serif text-5xl">Confiança construída todos os dias</h2>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[40px] bg-foreground/10 md:grid-cols-3">
          {numbers.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-start justify-end gap-3 bg-background p-10"
            >
              <span className="font-serif text-6xl italic text-primary">{value}</span>
              <span className="text-sm text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Mission / Vision / Values                                                   */
/* -------------------------------------------------------------------------- */
function MissionVisionValues() {
  const cards = [
    {
      tag: "Missão",
      icon: Heart,
      text: "Acolher, proteger e cuidar de cada criança e cada família com o mesmo carinho de um olhar de mãe, oferecendo medicina de excelência e humanizada.",
    },
    {
      tag: "Visão",
      icon: Sparkles,
      text: "Ser referência regional em saúde infantil e bem-estar familiar, reconhecida pela qualidade técnica, acolhimento e propósito de transformar vidas.",
    },
    {
      tag: "Valores",
      icon: ShieldCheck,
      text: "Amor ao próximo, ética médica, escuta ativa, segurança em cada atendimento e o compromisso de honrar o legado que nos deu origem.",
    },
  ];
  return (
    <section className="bg-cream/60 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            O que nos move
          </span>
          <h2 className="font-serif text-5xl italic">Missão, Visão e Valores</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map(({ tag, icon: Icon, text }) => (
            <article
              key={tag}
              className="flex flex-col gap-8 rounded-[40px] border border-foreground/5 bg-background p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {tag}
                </span>
                <Icon className="size-6 text-sage-deep" strokeWidth={1.5} />
              </div>
              <p className="font-serif text-2xl leading-snug">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Testimonials                                                                */
/* -------------------------------------------------------------------------- */
const testimonials = [
  {
    text: "Encontramos na Olhar de Mãe muito mais que uma clínica: encontramos uma extensão da nossa família. Atendimento impecável.",
    author: "Mariana S.",
    role: "Mãe da Lara, 3 anos",
  },
  {
    text: "A pediatria 24 horas nos trouxe uma tranquilidade que nenhum outro lugar oferece. A equipe é simplesmente acolhedora.",
    author: "Rafael e Camila",
    role: "Pais do Bento, 1 ano",
  },
  {
    text: "Minha filha ama ir ao médico. Da brinquedoteca à sala de vacinas, tudo foi pensado com tanto carinho que ela pede para voltar.",
    author: "Júlia M.",
    role: "Mãe da Helena, 5 anos",
  },
];

function Testimonials() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            Famílias que confiam
          </span>
          <h2 className="font-serif text-5xl">O que dizem as mães e pais</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ text, author, role }) => (
            <figure
              key={author}
              className="flex flex-col justify-between gap-8 rounded-[40px] border border-foreground/5 bg-peach/40 p-10"
            >
              <Quote className="size-8 text-primary" strokeWidth={1.5} />
              <blockquote className="font-serif text-xl italic leading-snug">"{text}"</blockquote>
              <figcaption>
                <div className="font-semibold">{author}</div>
                <div className="text-xs uppercase tracking-widest text-muted">{role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Final CTA                                                                   */
/* -------------------------------------------------------------------------- */
function FinalCTA() {
  return (
    <section id="contato" className="bg-foreground px-6 py-32 text-background">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 font-serif text-5xl leading-tight md:text-6xl">
          Quem cuida de uma criança,
          <br />
          <span className="italic text-primary">cuida de um futuro.</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-background/70">
          Agende sua consulta, atualize suas vacinas ou converse com nossa equipe. Estamos prontos
          para acolher sua família com o carinho, a atenção e a segurança que ela merece.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-5 text-lg font-bold text-white transition-transform hover:scale-105"
          >
            <MessageCircle className="size-5" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-background/30 px-10 py-5 text-lg font-bold transition-all hover:bg-background hover:text-foreground"
          >
            <Calendar className="size-5" />
            Marcar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-foreground/5 px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row">
        <div className="max-w-sm">
          <div className="mb-4 flex items-center gap-3">
            <img src={logoUrl} alt="Logomarca Olhar de Mãe" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-muted">
            Clínica pediátrica em Montes Claros — MG. Pediatria 24h, vacinação e equipe
            multidisciplinar há mais de 11 anos.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-3">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted">
              Contato
            </h5>
            <p className="flex items-center gap-2 text-sm">
              <MapPin className="size-4 text-primary" /> Montes Claros, MG
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Phone className="size-4 text-primary" /> (38) 9999-9999
            </p>
          </div>
          <div className="space-y-3">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted">
              Siga-nos
            </h5>
            <p className="flex items-center gap-2 text-sm">
              <Camera className="size-4 text-primary" /> @olhardemaemoc
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Globe className="size-4 text-primary" /> Olhar de Mãe
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl border-t border-foreground/5 pt-8 text-center">
        <p className="text-[10px] uppercase tracking-widest italic opacity-40">
          © {new Date().getFullYear()} Olhar de Mãe. O cuidado que atravessa gerações.
        </p>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* Sticky WhatsApp                                                             */
/* -------------------------------------------------------------------------- */
function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 rounded-2xl bg-[#25D366] p-4 text-white shadow-2xl transition-transform hover:scale-110"
    >
      <MessageCircle className="size-5" />
      <span className="hidden pr-2 text-sm font-bold sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
