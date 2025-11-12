function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500" />
          <p className="mt-3 text-white/70 max-w-xs">Frisco’s home for authentic South Indian flavors — dosas, biryanis, and filter coffee.</p>
        </div>
        <div>
          <h4 className="font-semibold">Hours</h4>
          <p className="text-white/70 mt-3">Mon–Thu: 11am – 10pm</p>
          <p className="text-white/70">Fri–Sat: 11am – 11pm</p>
          <p className="text-white/70">Sun: 11am – 9pm</p>
        </div>
        <div>
          <h4 className="font-semibold">Location</h4>
          <p className="text-white/70 mt-3">Frisco, Texas</p>
          <p className="text-white/70">75034</p>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 text-center text-white/60 text-sm">© {new Date().getFullYear()} Kaveri South Kitchen. All rights reserved.</div>
    </footer>
  )
}

export default Footer
