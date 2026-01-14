import SectionDivider from "./SectionDivider";

export default function Rituals() {
  return (
    <section className="relative py-20 px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-[#16071b]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Rituales Personalizados
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Servicios espirituales que transforman tu vida amorosa
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Cada ritual es realizado de forma personalizada, con absoluta confidencialidad y enfocado
            en obtener resultados reales y duraderos.
          </p>
        </div>

        {/* Cards container */}
        <div className="relative rounded-2xl border border-gold/30 p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <article className="bg-black/60 backdrop-blur text-white p-6 rounded-2xl shadow-lg border border-gold/20 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                <span className="text-gold text-2xl">☀</span>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gold">
                Amarres de Amor
              </h3>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Rituales de amor diseñados para recuperar a tu pareja, fortalecer el vínculo emocional
                y despertar sentimientos profundos hacia ti.
              </p>
              <a
                href="https://wa.me/528111840245"
                className="bg-gold text-black px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
              >
                Quiero un amarre de amor
              </a>
              <p className="mt-4 text-gold font-bold">
                (+52) 811 184 0245
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-black/60 backdrop-blur text-white p-6 rounded-2xl shadow-lg border border-gold/20 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                <span className="text-gold text-2xl">✦</span>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gold">
                Rituales para Enamorar
              </h3>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Ideales para iniciar una relación, atraer a esa persona especial o avivar la pasión
                cuando el amor parece enfriarse.
              </p>
              <a
                href="https://wa.me/528111840245"
                className="bg-gold text-black px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
              >
                Quiero un ritual
              </a>
              <p className="mt-4 text-gold font-bold">
                (+52) 811 184 0245
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-black/60 backdrop-blur text-white p-6 rounded-2xl shadow-lg border border-gold/20 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                <span className="text-gold text-2xl">☾</span>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gold">
                Retorno de Pareja
              </h3>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Si tu pareja se alejó, mis rituales de retorno pueden ayudarte a recuperar a la persona
                que amas y restaurar la armonía en la relación.
              </p>
              <a
                href="https://wa.me/528111840245"
                className="bg-gold text-black px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
              >
                Recuperar a mi pareja
              </a>
              <p className="mt-4 text-gold font-bold">
                (+52) 811 184 0245
              </p>
            </article>

          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
