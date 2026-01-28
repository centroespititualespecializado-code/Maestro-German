import watermark from "../assets/watermark.jpg";
import SectionDivider from "./SectionDivider";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${watermark})` }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl">
        <div className="flex justify-center gap-6 mb-6 text-gold">
          <span className="text-3xl">✦</span>
          <span className="text-4xl">☾</span>
          <span className="text-3xl">✦</span>
        </div>

        <h1 className="font-script text-6xl md:text-8xl mb-4 text-gold drop-shadow-lg">
          Maestro German
        </h1>

        <h2 className="text-gold text-xl md:text-2xl mb-6 font-semibold tracking-wide">
          Amarres de Amor Poderosos & Magia Blanca Ancestral
        </h2>

        <p className="text-white/90 text-lg max-w-3xl mx-auto mb-4">
          Guía espiritual con más de <span className="text-gold font-semibold">20 años de experiencia</span>.
        </p>

        <p className="text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Rituales efectivos de sanación, amarres de amor y protección espiritual que han transformado
          miles de vidas en México y el extranjero.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/40 border border-gold/20 rounded-xl py-5">
            <p className="text-gold text-2xl font-bold">+5,000</p>
            <p className="text-white/80 text-sm">Casos Exitosos</p>
          </div>

          <div className="bg-black/40 border border-gold/20 rounded-xl py-5">
            <p className="text-gold text-2xl font-bold">20+</p>
            <p className="text-white/80 text-sm">Años de Experiencia</p>
          </div>

          <div className="bg-black/40 border border-gold/20 rounded-xl py-5">
            <p className="text-gold text-2xl font-bold">100%</p>
            <p className="text-white/80 text-sm">Confidencial</p>
          </div>
        </div>

        <a
          href="https://wa.me/525531983776"
          className="inline-flex items-center gap-3 bg-gold text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Consulta Gratis por WhatsApp
        </a>
      </div>

      <SectionDivider />
    </section>
  );
}
