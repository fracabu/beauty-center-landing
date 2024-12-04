import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-rose-300" />
                <span>+39 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-rose-300" />
                <span>info@beautycentro.it</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-rose-300" />
                <span>Via della Bellezza 123, Milano</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-6">Orari</h3>
            <ul className="space-y-2">
              <li>Lunedì - Venerdì: 9:00 - 20:00</li>
              <li>Sabato: 9:00 - 18:00</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-6">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-rose-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Beauty Centro. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}