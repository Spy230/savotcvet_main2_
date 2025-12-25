import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Certificates from './components/Certificates';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'АвтоСервис - Профессиональный ремонт и обслуживание автомобилей';

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Качественный ремонт и обслуживание автомобилей. Гарантия качества, опытные мастера, современное оборудование. Полный спектр услуг по диагностике и ремонту.';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'автосервис, ремонт автомобилей, техническое обслуживание, диагностика авто, кузовной ремонт, ремонт двигателя';
    document.head.appendChild(metaKeywords);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Certificates />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;