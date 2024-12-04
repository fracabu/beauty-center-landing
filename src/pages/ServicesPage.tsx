import { motion } from 'framer-motion';

const services = [
  {
    name: "Trattamenti Viso",
    description: "Pulizia profonda, maschere personalizzate e trattamenti anti-age per una pelle radiosa.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop&q=60" // Woman getting facial treatment
  },
  {
    name: "Massaggi",
    description: "Massaggi rilassanti e terapeutici per il benessere del corpo e della mente.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60" // Massage stones and candles
  },
  {
    name: "Manicure & Pedicure",
    description: "Cura completa delle mani e dei piedi con prodotti di alta qualità.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=60" // Manicure treatment
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-screen relative bg-neutral-50 py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          I Nostri Servizi
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
