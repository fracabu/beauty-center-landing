import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
  inView: boolean;
}

export function ServiceCard({ service, index, inView }: ServiceCardProps) {
  const { icon: Icon, title, description } = service;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="text-center p-6 rounded-lg hover:bg-white transition-colors duration-300"
    >
      <div className="mb-6 flex justify-center">
        <Icon className="w-12 h-12 text-rose-300" />
      </div>
      <h3 className="text-2xl font-light mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}