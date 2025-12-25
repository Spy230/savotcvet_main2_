import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Контакты
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Как с нами связаться
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Телефон</h4>
                    <a
                      href="tel:+79001234567"
                      className="text-red-500 hover:text-red-400 transition-colors text-lg"
                    >
                      +7 (900) 123-45-67
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      Звоните с 9:00 до 21:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Адрес</h4>
                    <p className="text-gray-300">г. Москва, ул. Примерная, д. 1</p>
                    <a
                      href="https://yandex.ru/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-400 transition-colors text-sm inline-block mt-1"
                    >
                      Открыть на карте →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:info@autoservice.ru"
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      info@autoservice.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Режим работы</h4>
                    <p className="text-gray-300">Пн-Пт: 9:00 - 21:00</p>
                    <p className="text-gray-300">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="font-semibold text-white mb-3">
                Мессенджеры
              </h4>
              <div className="space-y-2">
                <a
                  href="https://wa.me/79001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-red-500 hover:text-red-400 transition-colors"
                >
                  WhatsApp: +7 (900) 123-45-67
                </a>
                <a
                  href="https://t.me/autoservice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-red-500 hover:text-red-400 transition-colors"
                >
                  Telegram: @autoservice
                </a>
              </div>
            </div>
          </div>

          <div className="h-96 lg:h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f5b67b3c8f8e35f8c7e9a8e7b5c4d3e2f1a0b9c&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта проезда"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
