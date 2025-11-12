import Header from '../Header'
import Footer from '../components/Footer'

function Menu() {
  const sections = [
    {
      name: 'Small Plates',
      items: [
        { name: 'Charred Octopus', price: 18, desc: 'smoked paprika, citrus, fennel' },
        { name: 'Ember Roasted Beets', price: 14, desc: 'goat cheese, pistachio, orange' },
      ],
    },
    {
      name: 'From the Fire',
      items: [
        { name: 'Dry-Aged Ribeye', price: 48, desc: 'rosemary ash, bone marrow butter' },
        { name: 'Steelhead Trout', price: 32, desc: 'charred lemon, dill oil' },
      ],
    },
    {
      name: 'Cocktails',
      items: [
        { name: 'Smoked Old Fashioned', price: 16, desc: 'bourbon, maple, cherry' },
        { name: 'Citrus Spark', price: 14, desc: 'gin, grapefruit, thyme' },
      ],
    },
  ]

  return (
    <div className="bg-[#0a0a0b] text-white min-h-screen">
      <Header />
      <main className="pt-24 pb-16 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold">Menu</h1>
        <p className="mt-2 text-white/70">Seasonally-curated plates and cocktails.</p>

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
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop" alt="Dining room" className="rounded-2xl w-full object-cover h-72" loading="lazy" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Menu
