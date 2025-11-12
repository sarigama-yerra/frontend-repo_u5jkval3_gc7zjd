import Header from '../Header'
import Footer from '../components/Footer'

function Menu() {
  const sections = [
    {
      name: 'Tiffin & Starters',
      items: [
        { name: 'Idli Sambar', price: 9, desc: 'Steamed rice cakes, lentil stew, coconut chutney' },
        { name: 'Medu Vada', price: 10, desc: 'Crisp lentil fritters, sambar, chutneys' },
        { name: 'Ghee Roast Dosa', price: 13, desc: 'Paper-thin crispy dosa, ghee, chutneys' },
      ],
    },
    {
      name: 'Signature Dosas',
      items: [
        { name: 'Mysore Masala Dosa', price: 14, desc: 'Spicy chutney, potato masala, chutneys' },
        { name: 'Paneer Butter Dosa', price: 15, desc: 'Paneer tikka, makhani drizzle' },
        { name: 'Mysore Onion Rava Dosa', price: 15, desc: 'Semolina dosa, spiced onion, chutneys' },
      ],
    },
    {
      name: 'Rice & Curries',
      items: [
        { name: 'Hyderabadi Chicken Biryani', price: 17, desc: 'Saffron basmati, caramelized onion, raita' },
        { name: 'Vegetable Chettinad', price: 16, desc: 'Peppercorn, curry leaf, roasted spices' },
        { name: 'Lemon Rice', price: 12, desc: 'Turmeric, mustard seeds, peanuts' },
      ],
    },
    {
      name: 'Drinks',
      items: [
        { name: 'Filter Coffee', price: 5, desc: 'Classic South Indian degree coffee' },
        { name: 'Mango Lassi', price: 6, desc: 'Alphonso mango, yogurt, cardamom' },
        { name: 'Masala Chai', price: 4, desc: 'Spiced tea, milk' },
      ],
    },
  ]

  return (
    <div className="bg-[#0a0a0b] text-white min-h-screen">
      <Header />
      <main className="pt-24 pb-16 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold">Menu</h1>
        <p className="mt-2 text-white/70">South Indian classics and regional favorites.</p>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <div key={s.name}>
              <h2 className="text-2xl font-bold border-b border-white/10 pb-2">{s.name}</h2>
              <ul className="mt-4 divide-y divide-white/10">
                {s.items.map((i) => (
                  <li key={i.name} className="py-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{i.name}</p>
                      <p className="text-white/70 text-sm">{i.desc}</p>
                    </div>
                    <p className="text-white/90">${i.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <img src="https://images.unsplash.com/photo-1717700299773-1accc14b67f6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEluZGlhbiUyMHNwcmVhZHxlbnwwfDB8fHwxNzYyOTM0NzIxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="South Indian spread" className="rounded-2xl w-full object-cover h-72" loading="lazy" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Menu
