import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import heroCloud from "../assets/hero-cloud.jpg";
import marta from "../assets/marta.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VECTRALYA — Consultora de Cloud Computing" },
      {
        name: "description",
        content:
          "Estrategia, arquitectura, seguridad y desarrollo de software cloud. Assessment de madurez, migraciones, FinOps, DevSecOps y formación para equipos técnicos.",
      },
      { property: "og:title", content: "VECTRALYA — Consultora de Cloud Computing" },
      {
        property: "og:description",
        content:
          "Estrategia, arquitectura, seguridad y desarrollo de software cloud que transforman infraestructura en ventaja competitiva medible.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    num: "01",
    title: "Estrategia y Assessment",
    lead: "Diagnóstico de madurez cloud, readiness, roadmap de migración y FinOps orientado a resultados.",
    items: [
      "Assessment de madurez cloud",
      "Cloud readiness assessment",
      "Roadmap de migración (lift-and-shift vs. re-arquitectura)",
      "FinOps y optimización de costes",
    ],
  },
  {
    num: "02",
    title: "Arquitectura e Implementación",
    lead: "Diseño y puesta en marcha de plataformas cloud que escalan sin fricción.",
    items: ["Diseño de arquitecturas cloud-native", "Arquitectura multi-cloud o híbrida"],
  },
  {
    num: "03",
    title: "Seguridad",
    lead: "Postura defensiva integrada en cada capa, antes del despliegue, no después.",
    items: [
      "Cloud security assessment (IAM, configuración, exposición)",
      "DevSecOps: seguridad integrada en el pipeline",
      "Cumplimiento normativo (ISO 27001)",
    ],
  },
  {
    num: "04",
    title: "Formación y Mentoring",
    lead: "Equipos autónomos, con criterio técnico propio y capacidad de operar lo construido.",
    items: [
      "Capacitación interna en arquitectura cloud",
      "Mentoring técnico para equipos en transición",
      "Playbooks y transferencia de conocimiento",
    ],
  },
  {
    num: "05",
    title: "Software a Medida",
    lead: "Desarrollo y modernización de software sobre tu propia plataforma cloud.",
    items: [
      "Desarrollo de software a medida",
      "Modernización de aplicaciones legacy",
      "APIs e integraciones",
      "Automatización con IaC y scripts",
    ],
  },
];

const process = [
  {
    step: "1",
    title: "Diagnosticamos",
    text: "Mapeamos tu stack, costes y riesgos con criterios objetivos.",
  },
  {
    step: "2",
    title: "Diseñamos",
    text: "Definimos arquitectura objetivo, roadmap y KPIs FinOps.",
  },
  {
    step: "3",
    title: "Implementamos",
    text: "Migramos y desplegamos con IaC y seguridad integrada desde el día uno.",
  },
  {
    step: "4",
    title: "Operamos",
    text: "Acompañamos, optimizamos y transferimos conocimiento a tu equipo.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand font-sans text-ink">
      <div className="glow pointer-events-none absolute inset-0" />

      <Nav />

      <header className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pt-20 pb-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
            Consultora de Cloud Computing
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
            Lleva tu nube al nivel de tu ambición.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Estrategia, arquitectura, seguridad y operaciones cloud que transforman infraestructura
            en ventaja competitiva medible.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="rounded-xl bg-accent px-6 py-3.5 font-semibold text-brand transition hover:bg-accent/90"
            >
              Solicita un assessment
            </a>
            <a
              href="#servicios"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold backdrop-blur transition hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted/80">
              Especialistas en los 3 ecosistemas líderes
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-ink backdrop-blur transition hover:border-accent/40">
                <span className="size-2 rounded-full bg-[#FF9900]" /> Amazon Web Services
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-ink backdrop-blur transition hover:border-accent/40">
                <span className="size-2 rounded-full bg-[#0089D6]" /> Microsoft Azure
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-ink backdrop-blur transition hover:border-accent/40">
                <span className="size-2 rounded-full bg-[#34A853]" /> Google Cloud
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
          <img
            src={heroCloud}
            alt="Panel de control de infraestructura cloud con nodos de red iluminados"
            width={1024}
            height={768}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </header>

      <Services />
      <Process />
      <Testimonials />
      <Contact />

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 py-8 text-sm text-muted md:grid-cols-3">
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-indigo-500 font-display text-sm font-bold text-white">
              V
            </span>
            <span className="font-display font-semibold text-ink">VECTRALYA</span>
          </div>

          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:text-sm">
              <ShieldCheck className="size-3.5" />
              Web libre de cookies de rastreo
            </span>
          </div>

          <p className="text-center text-xs text-muted md:text-right">© 2026 VECTRALYA · Consultora de Cloud Computing</p>
        </div>
      </footer>
    </div>
  );
}

function Nav() {
  return (
    <nav className="relative z-10 mx-auto max-w-7xl px-6 pt-6">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-indigo-500 font-display font-bold text-white">
            V
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">VECTRALYA</span>
        </div>
        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a href="#servicios" className="transition hover:text-ink">
            Servicios
          </a>
          <a href="#proceso" className="transition hover:text-ink">
            Cómo trabajamos
          </a>
          <a href="#clientes" className="transition hover:text-ink">
            Clientes
          </a>
        </div>
        <a
          href="#contacto"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-brand transition hover:bg-accent/90"
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}

function Services() {
  return (
    <section id="servicios" className="relative z-10 mx-auto max-w-7xl scroll-mt-8 px-6 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Servicios
        </span>
        <h2 className="font-display text-4xl font-bold tracking-tight">
          Todo el ciclo de tu nube, sin puntos ciegos
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.num}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/[0.08]"
          >
            <div className="grid size-11 place-items-center rounded-xl bg-accent/15 font-display font-bold text-accent">
              {s.num}
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.lead}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              {s.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 backdrop-blur-xl">
          <h3 className="font-display text-xl font-semibold text-accent">
            ¿No sabes por dónde empezar?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">
            Comenzamos con un diagnóstico gratuito de 90 minutos sobre tu stack actual.
          </p>
          <a
            href="#contacto"
            className="mt-5 inline-flex items-center gap-1.5 font-semibold text-accent transition-all hover:gap-2.5"
          >
            Reserva diagnóstico <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="relative z-10 mx-auto max-w-7xl scroll-mt-8 px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-12">
        <div className="mb-10 max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
            Un método claro, del diagnóstico a la operación
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="rounded-2xl border border-white/10 bg-brand/40 p-6">
              <span className="font-display text-4xl font-bold text-accent/40">{p.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="clientes" className="relative z-10 mx-auto max-w-7xl scroll-mt-8 px-6 py-16">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:col-span-2">
          <p className="font-display text-2xl leading-snug">
            "Reducimos el coste de nube un 41% en dos trimestres sin tocar el rendimiento. VECTRALYA
            entendió nuestro negocio antes que nosotros."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <img
              src={marta}
              alt="Retrato de Marta Cerezo"
              width={512}
              height={512}
              loading="lazy"
              className="size-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Marta Cerezo</p>
              <p className="text-sm text-muted">CTO, Grupo LogiData</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm text-ink/80">
              "El programa de mentoring elevó a nuestro equipo a nivel productivo en semanas."
            </p>
            <p className="mt-4 text-sm font-semibold">Raúl Ibáñez</p>
            <p className="text-xs text-muted">Head of Platform, NovaRetail</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm text-ink/80">
              "Cumplimos ISO 27001 la primera vez. Proceso impecable."
            </p>
            <p className="mt-4 text-sm font-semibold">Lucía Ferrán</p>
            <p className="text-xs text-muted">CISO, FinCap Digital</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey =
      (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) || "YOUR_ACCESS_KEY_HERE";

    formData.set("access_key", accessKey);
    formData.set("subject", "Nuevo contacto desde VECTRALYA");
    formData.set("from_name", "VECTRALYA Web");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
          "No se pudo enviar el mensaje. Por favor intenta más tarde o escríbenos a hola@vectralya.com.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Error de conexión. Por favor verifica tu red o escríbenos directamente a hola@vectralya.com.",
      );
    }
  };

  return (
    <section id="contacto" className="relative z-10 mx-auto max-w-7xl scroll-mt-8 px-6 py-16 pb-24">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-2 lg:p-12">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight">Hablemos de tu nube</h2>
          <p className="mt-4 max-w-md text-muted">
            Cuéntanos tu reto y te respondemos en menos de 24 horas laborables.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-accent/15 text-accent">
                <Mail className="size-4" />
              </span>
              <span className="text-ink/80">hola@vectralya.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-accent/15 text-accent">
                <MapPin className="size-4" />
              </span>
              <span className="text-ink/80">Perú · España · Remoto</span>
            </div>
          </div>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <span className="grid size-14 place-items-center rounded-2xl bg-accent/20 text-accent">
              <CheckCircle2 className="size-7" />
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold">¡Mensaje enviado con éxito!</h3>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Gracias por contactarnos. Hemos recibido tu consulta y te responderemos en menos de 24
              horas laborables.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Nombre"
                className="w-full rounded-xl border border-white/10 bg-brand/40 px-4 py-3 text-sm placeholder:text-muted/70 focus:border-accent/60 focus:outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder="Empresa"
                className="w-full rounded-xl border border-white/10 bg-brand/40 px-4 py-3 text-sm placeholder:text-muted/70 focus:border-accent/60 focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email corporativo"
              className="w-full rounded-xl border border-white/10 bg-brand/40 px-4 py-3 text-sm placeholder:text-muted/70 focus:border-accent/60 focus:outline-none"
            />
            <textarea
              rows={4}
              name="message"
              required
              placeholder="Cuéntanos tu proyecto"
              className="w-full resize-none rounded-xl border border-white/10 bg-brand/40 px-4 py-3 text-sm placeholder:text-muted/70 focus:border-accent/60 focus:outline-none"
            />
            {status === "error" && (
              <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-sm text-red-200">
                <AlertCircle className="size-5 shrink-0 text-red-400" />
                <p>{errorMessage}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-brand transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Enviando mensaje...</span>
                </>
              ) : (
                <span>Enviar mensaje</span>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
