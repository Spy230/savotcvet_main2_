import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">АвтоСервис</h3>
            <p className="text-gray-400 text-sm">
              Профессиональный ремонт и обслуживание автомобилей с 2014 года
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Наши работы
              </button>
              <button
                onClick={() => scrollToSection('certificates')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Сертификаты
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Контакты
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+79001234567"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+7 (900) 123-45-67</span>
              </a>
              <a
                href="mailto:info@autoservice.ru"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                <span>info@autoservice.ru</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Понедельник - Пятница</p>
              <p className="text-white">9:00 - 21:00</p>
              <p className="mt-3">Суббота - Воскресенье</p>
              <p className="text-white">10:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} АвтоСервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
