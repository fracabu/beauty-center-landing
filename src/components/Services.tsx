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
    <section id="servizi" ref={ref} className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-light text-center mb-16"
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