import { useEffect, useState } from 'react'
import SectionDivider from './SectionDivider'

export default function Comments() {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('comments') || '[]')
      setComments(saved)
    } catch (e) {
      setComments([])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !comment.trim()) {
      setMessage('Por favor, completa tu nombre y comentario.')
      return
    }

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      rating: Number(rating),
      text: comment.trim(),
      date: new Date().toISOString(),
    }

    setComments([newComment, ...comments])
    setName('')
    setRating(5)
    setComment('')
    setMessage('¡Gracias por tu comentario!')

    setTimeout(() => setMessage(''), 3000)
  }

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-gold text-sm mb-2">Comentarios</h3>
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">Deja tu comentario de satisfacción</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="bg-[#1b0720] p-6 rounded-xl border border-gold/30">
            <label className="block mb-3">
              <span className="text-white/80 text-sm">Nombre</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-md px-3 py-2 bg-[#0e0610] text-white border border-transparent focus:border-gold outline-none"
                placeholder="Tu nombre"
              />
            </label>

            <label className="block mb-3">
              <span className="text-white/80 text-sm">Valoración</span>
              <div className="mt-2 flex items-center gap-2">
                {[5,4,3,2,1].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${rating === s ? 'bg-gold text-black' : 'bg-[#2b0752] text-white'}`}
                    aria-label={`${s} estrellas`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </label>

            <label className="block mb-4">
              <span className="text-white/80 text-sm">Comentario</span>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-2 w-full rounded-md px-3 py-2 bg-[#0e0610] text-white border border-transparent focus:border-gold outline-none h-28"
                placeholder="Cuenta cómo te ayudó el servicio..."
              />
            </label>

            <div className="flex items-center gap-3">
              <button className="bg-gold text-black px-5 py-2 rounded-full font-semibold">Enviar</button>
              {message && <span className="text-green-400">{message}</span>}
            </div>
          </form>

          <div>
            <div className="grid gap-4">
              {comments.length === 0 && (
                <div className="text-white/80">Aún no hay comentarios — sé el primero en dejar el tuyo.</div>
              )}

              {comments.map((c) => (
                <article key={c.id} className="bg-[#f6e7be] p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-[#2b0752]">{c.name}</div>
                    <div className="text-sm text-[#2b0752]">{c.rating} ⭐</div>
                  </div>
                  <p className="text-sm text-[#2b0752]/90">{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  )
}
