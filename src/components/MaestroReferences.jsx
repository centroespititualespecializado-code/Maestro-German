import maestraImg from "../assets/maestra-aura.webp";
import SectionDivider from './SectionDivider';

export default function MaestroReferences() {
  return (
    <section className="relative py-16 px-6 bg-[#0f0710] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
            <img
              src={maestraImg}
              alt="Maestro German"
              className="block w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        <div>
          <h1 className="text-gold mb-4 text-4xl md:text-5xl font-script font-semibold tracking-wide">
            MAESTRO GERMAN
          </h1>

          <div className="prose prose-invert max-w-none text-white/90 mb-6">
            <p>
              Con más de <span className="text-gold font-semibold">20 años de experiencia </span> en amarres de amor y magia blanca ancestral, he dedicado mi vida a ayudar a
              miles de personas a recuperar el amor de su vida y encontrar la felicidad que merecen.
            </p>

            <p>
              Soy especialista reconocida en amarres de amor efectivos, retornos de pareja, endulzamientos y protección
              espiritual. Trabajo únicamente con magia blanca ancestral, respetando el libre albedrío y las leyes
              universales.
            </p>

            <p>
              He reunido a más de <span className="text-gold font-semibold">5,000 parejas</span> y ayudado a fortalecer innumerables relaciones en Ecuador y alrededor del
              mundo. Mi compromiso es brindarte resultados reales con ética y profesionalismo.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1.5l6 3v4.5c0 5-3.5 9.5-6 10-2.5-.5-6-5-6-10V4.5l6-3z"
                    fill="#f5d58b"
                  />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gold">100% confidencial</p>
                  <p className="text-xs text-white/80">Tu privacidad está protegida</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12h3l3-8 4 16 3-8 4 8"
                    stroke="#f5d58b"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gold">Resultados rápidos</p>
                  <p className="text-xs text-white/80">Efectividad comprobada</p>
                </div>
              </div>
            </div>

            <div className="sm:ml-6">
              <a
                href="https://wa.me/528111840245"
                className="inline-block bg-gold text-black font-semibold px-6 py-3 rounded-full shadow-md"
              >
                Agenda tu Consulta Ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
