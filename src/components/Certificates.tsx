import { Award, FileText, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Сертификат качества ISO 9001',
      image: 'https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Международный сертификат качества',
    },
    {
      id: 2,
      title: 'Лицензия на ремонт',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Лицензия на осуществление деятельности',
    },
    {
      id: 3,
      title: 'Сертификат производителя',
      image: 'https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Авторизованный сервисный центр',
    },
  ];

  return (
    <section id="certificates" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Сертификаты и лицензии
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Наша деятельность подтверждена необходимыми документами и сертификатами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-red-900 bg-opacity-30 p-6 rounded-xl text-center border border-red-600">
            <ShieldCheck className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Гарантия качества
            </h3>
            <p className="text-gray-300 text-sm">
              Все работы выполняются с соблюдением стандартов качества
            </p>
          </div>

          <div className="bg-red-900 bg-opacity-30 p-6 rounded-xl text-center border border-red-600">
            <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Сертифицированные мастера
            </h3>
            <p className="text-gray-300 text-sm">
              Наши специалисты регулярно проходят обучение и аттестацию
            </p>
          </div>

          <div className="bg-red-900 bg-opacity-30 p-6 rounded-xl text-center border border-red-600">
            <FileText className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Официальная деятельность
            </h3>
            <p className="text-gray-300 text-sm">
              Работаем с полным пакетом разрешительных документов
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-700"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
