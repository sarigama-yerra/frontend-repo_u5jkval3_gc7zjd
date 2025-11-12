function CTA() {
  return (
    <section id="reserve" className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Reserve your table in Frisco</h2>
          <p className="mt-3 text-white/90">Walk-ins welcome, reservations encouraged — especially on weekends.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="bg-white/10 backdrop-blur rounded-2xl p-6 ring-1 ring-white/20">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="w-full rounded-md bg-white/90 text-black px-3 py-2" />
            <input required type="tel" placeholder="Phone" className="w-full rounded-md bg-white/90 text-black px-3 py-2" />
            <input required type="date" className="w-full rounded-md bg-white/90 text-black px-3 py-2" />
            <input required type="time" className="w-full rounded-md bg-white/90 text-black px-3 py-2" />
            <input required type="number" min="1" max="12" placeholder="Guests" className="w-full rounded-md bg-white/90 text-black px-3 py-2" />
            <button className="sm:col-span-2 mt-2 w-full rounded-md bg-black/80 hover:bg-black/90 text-white py-2 font-semibold">Request Booking</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CTA
