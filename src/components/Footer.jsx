function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500" />
          <p className="mt-3 text-white/70 max-w-xs">A modern dining room with an open-fire heart. Bold plates, great music, and a late-night glow.</p>
        </div>
        <div>
          <h4 className="font-semibold">Hours</h4>
          <p className="text-white/70 mt-3">Mon–Thu: 5pm – 10pm</p>
          <p className="text-white/70">Fri–Sat: 5pm – 12am</p>
          <p className="text-white/70">Sun: 4pm – 9pm</p>
        </div>
        <div>
          <h4 className="font-semibold">Location</h4>
          <p className="text-white/70 mt-3">123 Ember Street</p>
          <p className="text-white/70">Red City, RC 42424</p>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 text-center text-white/60 text-sm">© {new Date().getFullYear()} Tile & Flame. All rights reserved.</div>
    </footer>
  )
}

export default Footer
