function About() {
  return (
    <section id="about" className="relative py-20 bg-[#0b0b0c] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Our Kitchen</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We pair seasonal ingredients with open-fire techniques to craft plates that are vibrant, soulful, and memorable.
            Every dish is built on balance—smoke and citrus, heat and herb, crisp and velvet—served in a space designed to delight.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-3xl font-bold text-white">150+</p>
              <p className="text-sm text-gray-400">Labels in our cellar</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-3xl font-bold text-white">24</p>
              <p className="text-sm text-gray-400">Seasonal plates</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-3xl font-bold text-white">4.8</p>
              <p className="text-sm text-gray-400">Guest rating</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop"
              alt="Chefs plating a dish"
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
