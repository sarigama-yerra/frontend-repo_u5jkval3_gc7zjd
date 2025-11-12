function About() {
  return (
    <section id="about" className="relative py-20 bg-[#0b0b0c] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Frisco’s South Indian Heart</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            From Tamil Nadu to Telangana, our kitchen celebrates the spice routes and home-style recipes of the South. 
            Stone-ground batters, ghee-roasted specialties, and coastal flavors come together with a modern touch.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-3xl font-bold text-white">30+</p>
              <p className="text-sm text-gray-400">Dosa varieties</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-3xl font-bold text-white">12hr</p>
              <p className="text-sm text-gray-400">Fermented batters</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-3xl font-bold text-white">4.8</p>
              <p className="text-sm text-gray-400">Local rating</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1400&auto=format&fit=crop"
              alt="South Indian thali with dosa and chutneys"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
