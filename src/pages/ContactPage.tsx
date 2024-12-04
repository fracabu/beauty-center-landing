import { motion } from 'framer-motion';
import { useState } from 'react';

export function ContactPage() {
  const [status, setStatus] = useState<'success' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenuto */}
      <div className="relative z-20 max-w-2xl mx-auto px-4 text-white">
        {/* Titolo */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Scrivici
        </motion.h2>

        {/* Messaggio di successo */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 p-3 bg-green-500 text-white rounded text-center"
          >
            Messaggio inviato con successo! Ti risponderemo presto.
          </motion.div>
        )}

        {/* Modulo */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2">Nome e Cognome</label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border rounded bg-white text-black"
              placeholder="Inserisci il tuo nome"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border rounded bg-white text-black"
              placeholder="La tua email"
            />
          </div>

          <div>
            <label className="block mb-2">Messaggio</label>
            <textarea
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full p-3 border rounded bg-white text-black"
              placeholder="Scrivi il tuo messaggio..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 px-4 rounded hover:bg-gray-200 transition-all"
          >
            Invia Messaggio
          </button>
        </motion.form>
      </div>
    </div>
  );
}
