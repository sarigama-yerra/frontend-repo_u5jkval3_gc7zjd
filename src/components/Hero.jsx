import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Authentic South Indian Kitchen in Frisco
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            Crispy dosas, aromatic biryanis, fluffy idlis, and filter coffee — crafted with tradition and a modern spark.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#reserve" className="px-5 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors">Reserve a Table</a>
            <a href="/menu" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">View Menu</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </section>
  )
}

export default Hero
