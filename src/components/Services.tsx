import { Wrench, Search, Zap, Car, Settings, PaintBucket } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: Search,
      title: 'Диагностика',
      services: [
        { name: 'Компьютерная диагностика', price: 'от 1 500 ₽' },
        { name: 'Диагностика ходовой части', price: 'от 1 000 ₽' },
        { name: 'Диагностика двигателя', price: 'от 2 000 ₽' },
        { name: 'Диагностика тормозной системы', price: 'от 800 ₽' },
      ],
    },
    {
      icon: Wrench,
      title: 'Ремонт двигателя',
      services: [
        { name: 'Замена масла и фильтров', price: 'от 800 ₽' },
        { name: 'Ремонт системы охлаждения', price: 'от 3 000 ₽' },
        { name: 'Замена ремня ГРМ', price: 'от 4 500 ₽' },
        { name: 'Капитальный ремонт двигателя', price: 'от 50 000 ₽' },
      ],
    },
    {
      icon: Settings,
      title: 'Ремонт ходовой части',
      services: [
        { name: 'Замена амортизаторов', price: 'от 2 500 ₽' },
        { name: 'Ремонт подвески', price: 'от 3 000 ₽' },
        { name: 'Развал-схождение', price: 'от 1 500 ₽' },
        { name: 'Замена шаровых опор', price: 'от 2 000 ₽' },
      ],
    },
    {
      icon: Zap,
      title: 'Электрика',
      services: [
        { name: 'Ремонт генератора', price: 'от 2 500 ₽' },
        { name: 'Замена стартера', price: 'от 3 000 ₽' },
        { name: 'Ремонт электропроводки', price: 'от 1 500 ₽' },
        { name: 'Установка сигнализации', price: 'от 5 000 ₽' },
      ],
    },
    {
      icon: PaintBucket,
      title: 'Кузовной ремонт',
      services: [
        { name: 'Покраска элемента', price: 'от 5 000 ₽' },
        { name: 'Рихтовка кузова', price: 'от 3 000 ₽' },
        { name: 'Полировка кузова', price: 'от 4 000 ₽' },
        { name: 'Антикоррозийная обработка', price: 'от 3 500 ₽' },
      ],
    },
    {
      icon: Car,
      title: 'Техническое обслуживание',
      services: [
        { name: 'ТО-1 (15 000 км)', price: 'от 3 000 ₽' },
        { name: 'ТО-2 (30 000 км)', price: 'от 5 000 ₽' },
        { name: 'ТО-3 (45 000 км)', price: 'от 7 000 ₽' },
        { name: 'Предпродажная подготовка', price: 'от 8 000 ₽' },
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Услуги и цены
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию автомобилей. Все цены указаны с учетом работы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-700 hover:border-red-500"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-3">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-start border-b border-gray-700 pb-3 last:border-0"
                    >
                      <span className="text-gray-300 flex-1 pr-2">
                        {service.name}
                      </span>
                      <span className="text-red-500 font-semibold whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Точная стоимость работ определяется после диагностики автомобиля
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
