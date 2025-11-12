function Features() {
  const features = [
    {
      title: 'Dosa Bar',
      desc: 'Live griddles serving paper, ghee roast, masala, and Mysore dosas.',
      img: 'https://images.unsplash.com/photo-1597143720581-01d2cbcff3f5?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Tiffin Favorites',
      desc: 'Idli, vada, pongal, upma — comfort plates for any time of day.',
      img: 'https://images.unsplash.com/photo-1645118004491-fd967aea8d5c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Filter Coffee',
      desc: 'South Indian “degree coffee” with frothy, aromatic finish.',
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">What to Try</h2>
        <p className="mt-3 text-white/70 max-w-2xl">From crispy dosas to aromatic biryanis, discover South India’s most loved flavors right here in Frisco.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <img src={f.img} alt={f.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-white/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
