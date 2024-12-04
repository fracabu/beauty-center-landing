import { motion } from 'framer-motion';

const treatments = [
  {
    name: "Pulizia Viso Professionale",
    description: "Trattamento completo con pulizia profonda, scrub, maschera personalizzata e massaggio finale.",
    duration: "60 minuti",
    price: "€50",
  },
  {
    name: "Massaggio Rilassante",
    description: "Massaggio total body con oli essenziali per alleviare lo stress e rilassare la muscolatura.",
    duration: "50 minuti",
    price: "€60",
  },
  {
    name: "Manicure Spa",
    description: "Trattamento completo per le mani con scrub, maschera nutriente e massaggio.",
    duration: "45 minuti",
    price: "€35",
  },
  {
    name: "Pedicure Curativo",
    description: "Trattamento professionale per la cura dei piedi con attenzione particolare alle zone problematiche.",
    duration: "50 minuti",
    price: "€40",
  },
];

export function TreatmentsPage() {
  return (
    <div className="min-h-screen relative bg-neutral-50 py-16">
      {/* Immagine di sfondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sezione Contenuto */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          I Nostri Trattamenti
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
                  <div className="text-sm text-gray-500 mb-2">
                    ⏱ Durata: {treatment.duration}
                  </div>
                  <div className="text-lg font-bold text-gray-800">{treatment.price}</div>
                </div>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
