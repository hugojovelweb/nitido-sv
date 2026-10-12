import { useState } from "react";
import { brand, socials } from "../../data/content";
import FramedTag from "../ui/FramedTag";
import SocialIcon from "../ui/SocialIcon";
import Button from "../ui/Button";

const initialForm = { name: "", email: "", phone: "", company: "", message: "" };

// Proveedor de envío externo (Formspree, Resend, etc.). Configúralo en un
// archivo .env como VITE_FORM_ENDPOINT=https://... — ver docs/setup.md y
// docs/adr/ADR-004-contact-form.md. Sin esta variable, el formulario usa el
// envío simulado (fakeSubmit) como placeholder funcional de UI/UX.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || "";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Ingresa tu nombre.";
  if (!values.email.trim()) {
    errors.email = "Ingresa tu correo.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Ingresa un correo válido.";
  }
  if (!values.message.trim()) errors.message = "Contanos brevemente tu proyecto.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("submit_failed");
      } else {
        // Sin proveedor configurado todavía: envío simulado como placeholder
        // funcional de UI/UX. Ver docs/adr/ADR-004-contact-form.md
        await fakeSubmit();
      }
      setStatus("success");
      setValues(initialForm);
    } catch {
      setStatus("error");
    }
  }

  function fakeSubmit() {
    return new Promise((resolve) => setTimeout(resolve, 900));
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 data-reveal="up" className="font-display text-5xl uppercase sm:text-6xl">Contacto</h2>
        <FramedTag className="mt-4">Hablemos de tu marca.</FramedTag>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-10">
          {/* Contacto directo */}
          <div>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-nitido-purple text-nitido-purple">
                  <SocialIcon name="Instagram" />
                </span>
                <div>
                  <p className="text-sm text-white/60">Instagram</p>
                  <a href={brand.instagramLink} target="_blank" rel="noreferrer" className="font-semibold hover:text-nitido-purple">
                    {brand.instagram}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-nitido-purple text-nitido-purple">
                  <SocialIcon name="WhatsApp" />
                </span>
                <div>
                  <p className="text-sm text-white/60">WhatsApp</p>
                  <a href={brand.whatsappLink} target="_blank" rel="noreferrer" className="font-semibold hover:text-nitido-purple">
                    {brand.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-nitido-purple text-nitido-purple">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M3 6.5A2.5 2.5 0 015.5 4h13A2.5 2.5 0 0121 6.5v11a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17.5v-11z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-white/60">Correo</p>
                  <a href={`mailto:${brand.email}`} className="font-semibold hover:text-nitido-purple break-all">
                    {brand.email}
                  </a>
                </div>
              </li>
            </ul>

            <p className="mt-8 mb-3 text-sm text-white/60">Síguenos también en:</p>
            <div className="flex flex-wrap gap-3">
              {socials
                .filter((s) => !["Instagram", "WhatsApp"].includes(s.name))
                .map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.confirmed ? "_blank" : undefined}
                    rel={s.confirmed ? "noreferrer" : undefined}
                    aria-label={s.confirmed ? s.name : `${s.name} (próximamente)`}
                    aria-disabled={!s.confirmed}
                    title={s.confirmed ? s.name : `${s.name} — pendiente de confirmar`}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                      s.confirmed
                        ? "border-nitido-red text-white hover:bg-nitido-red/15"
                        : "border-white/15 text-white/30 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (!s.confirmed) e.preventDefault();
                    }}
                  >
                    <SocialIcon name={s.name} />
                  </a>
                ))}
            </div>

            <p className="mt-8 font-body text-white/75">
              Estamos listos para ayudarte a crear contenido más{" "}
              <span className="text-nitido-red font-semibold">nítido</span>.
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:border-nitido-purple"
                placeholder="Tu nombre"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-nitido-red">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:border-nitido-purple"
                  placeholder="tu@correo.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-nitido-red">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm text-white/70">
                  Teléfono (opcional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:border-nitido-purple"
                  placeholder="+503 0000 0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm text-white/70">
                Marca / Empresa (opcional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={values.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:border-nitido-purple"
                placeholder="Nombre de tu marca"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
                Contanos sobre tu proyecto
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:border-nitido-purple"
                placeholder="¿Qué necesitas?"
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-nitido-red">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={status === "submitting"} className="w-full">
              {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
            </Button>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="text-sm text-green-400">
                  ¡Gracias! Recibimos tu mensaje y te contactaremos pronto.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-nitido-red">
                  Algo salió mal. Escríbenos directo por WhatsApp mejor.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
