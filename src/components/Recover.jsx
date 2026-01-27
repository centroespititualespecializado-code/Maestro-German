import recoverImg from "../assets/watermark.jpg"
import SectionDivider from './SectionDivider'

export default function Recover() {
  return (
    <section className="relative py-20 px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-[#16071b]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <img
              src={recoverImg}
              alt="endulzamiento"
              className="block w-80 h-80 object-cover rounded-2xl"
            />
          </div>
        </div>

        <div>
          <h3 className="text-gold mb-2 text-sm font-semibold uppercase tracking-wide">
            Endulzamientos para enamorar a tu Ex
          </h3>

          <h2 className="text-gold font-serif text-2xl md:text-3xl font-bold mb-4 leading-tight">
            ¿Tu ex pareja te dejó, pero sientes que el amor no ha desaparecido?
          </h2>

          <p className="mb-6 text-white/90 max-w-md">
            Con mi Endulzamiento de Amor lograré que tu ex piense en ti, te busque y vuelva a sentir el deseo de estar a tu lado.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/525531983776"
              className="bg-whatsapp text-black px-5 py-3 rounded-full inline-flex items-center gap-3 font-semibold shadow-md"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#25D366" d="M12 .5C5.4.5.5 5.4.5 12c0 2.1.6 4 1.8 5.7L.5 23.5l6.2-1.6c1.4.8 3 1.2 4.9 1.2 6.6 0 11.5-5 11.5-11.6S18.6.5 12 .5z"/>
                <path fill="#fff" d="M17.7 14.1c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-1 1.2-.4.2-.7.1a6.9 6.9 0 01-2-1.2 7.2 7.2 0 01-1.3-1.6c-.3-.6 0-.9.3-1.2.3-.2.5-.4.8-.8.3-.4.3-.6.5-1 .1-.3 0-.5-.2-.6s-.7-.5-1-.8c-.4-.3-.8-.7-1.1-1.1s-.3-.6 0-1c.4-.4.8-1 1.2-1.3 1-.7 2.4-.6 3 .1.5.7 1.5 1.2 2.1 1.6.6.4 1.1.9 1.5 1.4.4.6.4.9.2 1.4-.1.3-.3.6-.6.8-.3.2-.6.4-.9.4z"/>
              </svg>
              ¡Quiero un endulzamiento!
            </a>

            <div>
              <p className="text-gold font-extrabold text-xl">
                +525531983776
              </p>
            </div>
          </div>

          <p className="mt-4 text-white italic">
            ¡Haz que se enamore de ti como la primera vez!
          </p>
        </div>
      </div>

      <SectionDivider />
    </section>
  )
}
