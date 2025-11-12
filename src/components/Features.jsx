function Features() {
  const features = [
    {
      title: 'Chef’s Counter',
      desc: 'Sit ringside for a front-row view of the flame and finesse.',
      img: 'https://images.unsplash.com/photo-1528697203043-733bfdca7171?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Seasonal Tasting',
      desc: 'A curated progression through our most expressive plates.',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Craft Cocktails',
      desc: 'Smoked spirits, house infusions, and bright garden notes.',
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Experiences</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Interactive moments designed to turn dinner into a story.</p>
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
