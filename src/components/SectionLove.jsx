import sectionLove from "../assets/sectionLove.jpg";
import SectionDivider from "./SectionDivider";

export default function SectionLove() {
  return (
    <section className="relative py-20 px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-[#16071b]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
            <img
              src={sectionLove}
              alt="Ritual de amor para atraer a tu pareja"
              className="block w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-gold mb-3 text-sm font-semibold uppercase tracking-widest">
            Amarres de Amor Poderosos
          </p>

          <h2 className="text-gold font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Haz que esa persona especial te busque y piense solo en ti
          </h2>

          <p className="mb-4 text-white/90 leading-relaxed">
            Si sientes que el amor se está alejando o que esa persona no te presta la atención que mereces,
            mis rituales de amor pueden ayudarte a cambiar esa situación.
          </p>

          <p className="mb-6 text-white/80 leading-relaxed">
            Trabajo con <span className="text-gold font-semibold">magia blanca ancestral</span> para despertar
            sentimientos, atraer el amor verdadero y fortalecer la conexión espiritual entre tú y tu pareja,
            siempre con discreción y respeto.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href="https://wa.me/528111840245"
              className="bg-whatsapp text-black px-6 py-3 rounded-full inline-flex items-center justify-center gap-3 font-semibold shadow-md hover:scale-105 transition"
              aria-label="WhatsApp"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="#25D366"
                  d="M12 .5C5.4.5.5 5.4.5 12c0 2.1.6 4 1.8 5.7L.5 23.5l6.2-1.6c1.4.8 3 1.2 4.9 1.2 6.6 0 11.5-5 11.5-11.6S18.6.5 12 .5z"
                />
                <path
                  fill="#fff"
                  d="M17.7 14.1c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-1 1.2-.4.2-.7.1a6.9 6.9 0 01-2-1.2 7.2 7.2 0 01-1.3-1.6c-.3-.6 0-.9.3-1.2.3-.2.5-.4.8-.8.3-.4.3-.6.5-1 .1-.3 0-.5-.2-.6s-.7-.5-1-.8c-.4-.3-.8-.7-1.1-1.1s-.3-.6 0-1c.4-.4.8-1 1.2-1.3 1-.7 2.4-.6 3 .1.5.7 1.5 1.2 2.1 1.6.6.4 1.1.9 1.5 1.4.4.6.4.9.2 1.4-.1.3-.3.6-.6.8-.3.2-.6.4-.9.4z"
                />
              </svg>
              Consulta ahora por WhatsApp
            </a>

            <p className="text-gold font-bold text-lg">
              (+52) 811 184 0245
            </p>
          </div>

          <p className="mt-5 text-white/80 max-w-md">
            Resultados rápidos, atención personalizada y absoluta confidencialidad.
          </p>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
