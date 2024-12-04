import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Heart, Flower2 } from 'lucide-react';
import { ServiceCard } from './Services/ServiceCard';

const services = [
  {
    icon: Sparkles,
    title: 'Pulizia Viso',
    description: 'Trattamento profondo per una pelle radiosa e purificata'
  },
  {
    icon: Heart,
    title: 'Anti-Età',
    description: 'Tecniche innovative per contrastare i segni del tempo'
  },
  {
    icon: Flower2,
    title: 'Massaggi',
    description: 'Rituali rilassanti per corpo e mente'
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="servizi"
      ref={ref}
      className="relative py-20 bg-neutral-50"
    >
      {/* Immagine di sfondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
          alt="Trattamenti estetici"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenuto */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-light text-center mb-16 text-white"
        >
          I Nostri Servizi
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
