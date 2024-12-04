import { motion } from 'framer-motion';

const priceList = [
  {
    category: "Trattamenti Viso",
    items: [
      { name: "Pulizia Viso Base", price: "45€" },
      { name: "Trattamento Anti-Age", price: "75€" },
      { name: "Maschera Idratante", price: "35€" },
      { name: "Peeling Viso", price: "50€" }
    ]
  },
  {
    category: "Massaggi",
    items: [
      { name: "Massaggio Rilassante (50min)", price: "60€" },
      { name: "Massaggio Decontratturante", price: "70€" },
      { name: "Hot Stone Massage", price: "80€" },
      { name: "Massaggio Sportivo", price: "65€" }
    ]
  },
  {
    category: "Manicure & Pedicure",
    items: [
      { name: "Manicure Base", price: "25€" },
      { name: "Pedicure Estetico", price: "35€" },
      { name: "Manicure Spa", price: "40€" },
      { name: "Pedicure Curativo", price: "45€" }
    ]
  }
];

export function PricingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
          alt="Trattamenti estetici"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenuto */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Listino Prezzi
        </motion.h1>
        <div className="space-y-8">
          {priceList.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              <div className="bg-white text-black rounded-lg shadow-md overflow-hidden">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between p-4 border-b border-gray-200 last:border-0"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
