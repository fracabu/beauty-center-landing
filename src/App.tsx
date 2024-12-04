import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServicesPage } from './pages/ServicesPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/servizi" element={<ServicesPage />} />
          <Route path="/trattamenti" element={<TreatmentsPage />} />
          <Route path="/prezzi" element={<PricingPage />} />
          <Route path="/contatti" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;