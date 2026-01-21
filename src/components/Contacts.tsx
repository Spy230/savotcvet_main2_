import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

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
                    <h4 className="font-semibold text-white mb-1">Телефоны</h4>
                    <div className="space-y-1">
                      <a
                        href="tel:+79099806800"
                        className="block text-red-500 hover:text-red-400 transition-colors text-lg"
                      >
                        +7 (909) 980-68-00
                      </a>
                      <p className="text-gray-400 text-sm">Основной телефон</p>
                      <a
                        href="tel:+74993910051"
                        className="block text-red-500 hover:text-red-400 transition-colors text-lg"
                      >
                        +7 (499) 391-00-51
                      </a>
                      <a
                        href="tel:+79253910051"
                        className="block text-red-500 hover:text-red-400 transition-colors text-lg"
                      >
                        +7 (925) 391-00-51
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Адрес</h4>
                    <p className="text-gray-300">Центральный федеральный округ, Москва, Зеленоград, улица Андреевка, 31</p>
                    <a
                      href="https://yandex.ru/maps/-/CLdTZNy5"
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
                      href="mailto:samotsvet1@mail.ru"
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      samotsvet1@mail.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Режим работы</h4>
                    <p className="text-gray-300">Ежедневно: 9:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="font-semibold text-white mb-3">
                Мессенджеры и соцсети
              </h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/79253910051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-red-500 hover:text-red-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: +7 (925) 391-00-51</span>
                </a>
                <a
                  href="https://vk.com/club77881857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-red-500 hover:text-red-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ВК группа: club77881857</span>
                </a>
              </div>
            </div>
          </div>

          <div className="h-96 lg:h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.145502%2C55.972903&z=17&l=map&pt=37.145502%2C55.972903%2Cpm2rdm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Карта проезда - Зеленоград, ул. Андреевка, 31"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
