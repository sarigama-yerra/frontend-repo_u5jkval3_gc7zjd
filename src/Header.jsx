import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

function Header() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-red-600' : 'text-gray-200 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500" />
            <span className="text-white font-semibold tracking-wide">Kaveri South Kitchen</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/menu" className={navLinkClass}>
              Menu
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <a href="#reserve" className="ml-2 inline-flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <Phone className="w-4 h-4" /> Reserve
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/menu" onClick={() => setOpen(false)} className={navLinkClass}>
              Menu
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>
              Contact
            </NavLink>
            <a href="#reserve" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-white bg-red-600">
              Reserve
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
