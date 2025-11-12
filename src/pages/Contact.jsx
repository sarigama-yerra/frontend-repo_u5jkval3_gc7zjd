import Header from '../Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className="bg-[#0a0a0b] text-white min-h-screen">
      <Header />
      <main className="pt-24 pb-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-extrabold">Contact</h1>
          <p className="mt-2 text-white/70">We’d love to host you in Frisco. Reach out for reservations, catering, or events.</p>

          <div className="mt-8 space-y-4">
            <p className="text-white/80"><span className="font-semibold">Phone:</span> (469) 555-0145</p>
            <p className="text-white/80"><span className="font-semibold">Email:</span> hello@kaverisouthkitchen.com</p>
            <p className="text-white/80"><span className="font-semibold">Address:</span> 123 Legacy Dr, Frisco, TX 75034</p>
            <div className="aspect-video w-full rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?auto=format&fit=crop&q=80&w=1600" alt="Restaurant exterior" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-white/5 rounded-2xl p-6 ring-1 ring-white/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="First name" className="w-full rounded-md bg-white/90 text-black px-3 py-2" />
            <input required placeholder="Last name" className="w-full rounded-md bg-white/90 text-black px-3 py-2" />
            <input required type="email" placeholder="Email" className="w-full rounded-md bg-white/90 text-black px-3 py-2 sm:col-span-2" />
            <textarea required rows="5" placeholder="How can we help?" className="w-full rounded-md bg-white/90 text-black px-3 py-2 sm:col-span-2" />
            <button className="sm:col-span-2 mt-2 w-full rounded-md bg-red-600 hover:bg-red-700 text-white py-2 font-semibold">Send Message</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
