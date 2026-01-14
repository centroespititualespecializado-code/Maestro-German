import SectionDivider from "./SectionDivider";

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 text-center">

      {/* Background */}
      <div className="absolute inset-0 bg-[#16071b]" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
          Testimonios Reales
        </p>

        <h2 className="text-gold font-serif text-3xl md:text-4xl font-bold mb-6">
          Resultados que hablan por sí solos
        </h2>

        <p className="text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Cada historia es distinta, pero el objetivo es el mismo: recuperar el amor,
          la armonía y la tranquilidad emocional. Estos son algunos testimonios
          de personas que confiaron en mi trabajo espiritual.
        </p>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
            <p className="text-white/80 text-sm mb-4">
              “Pensé que lo había perdido para siempre, pero después del ritual volvió a buscarme.
              Hoy estamos juntos nuevamente.”
            </p>
            <p className="text-gold font-semibold text-sm">
              — Andrea M.
            </p>
          </article>

          <article className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
            <p className="text-white/80 text-sm mb-4">
              “El Maestro German fue claro y honesto desde el inicio. Los resultados llegaron
              antes de lo que imaginé.”
            </p>
            <p className="text-gold font-semibold text-sm">
              — Carlos R.
            </p>
          </article>

          <article className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
            <p className="text-white/80 text-sm mb-4">
              “Recuperé la comunicación con mi pareja y el amor volvió poco a poco.
              Recomendada totalmente.”
            </p>
            <p className="text-gold font-semibold text-sm">
              — Sofía L.
            </p>
          </article>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/528111840245"
          className="inline-block bg-whatsapp text-black px-8 py-4 rounded-full font-semibold shadow-md hover:scale-105 transition"
        >
          Solicita tu consulta ahora
        </a>
      </div>

      <SectionDivider />
    </section>
  );
}
