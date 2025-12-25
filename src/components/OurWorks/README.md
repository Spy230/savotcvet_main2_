# Компонент "Наши работы"

Адаптивная карусель для отображения портфолио выполненных работ с поддержкой lightbox.

## Особенности

✅ **Адаптивный дизайн**
- Десктоп: 3-4 изображения одновременно
- Планшет: 2 изображения
- Мобильные: 1 изображение с peek effect

✅ **Навигация**
- Свайп на тач-устройствах
- Стрелки навигации (всегда видимы)
- Клавиатурная навигация в lightbox (←/→/Esc)

✅ **Lightbox**
- Полноэкранный просмотр изображений
- Навигация между изображениями
- Закрытие по клику вне изображения или Esc

✅ **Оптимизация**
- Lazy loading для изображений
- Отдельные thumbnail и полноразмерные версии
- Минималистичный дизайн без лишних элементов

## Использование

### Базовое использование
```tsx
import OurWorks from './components/OurWorks';

function App() {
  return (
    <div>
      <OurWorks />
    </div>
  );
}
```

### Кастомизация изображений

1. **Через утилиту generateWorkImages:**
```tsx
// В src/utils/imageUtils.ts
const workImages = generateWorkImages(12); // 12 изображений
```

2. **Добавление собственных изображений:**
Поместите изображения в `public/images/works/` с именами:
- `work-1.jpg`
- `work-2.jpg`
- `work-3.jpg`
- и т.д.

3. **Программная настройка:**
```tsx
const customImages: WorkImage[] = [
  {
    id: 1,
    src: '/images/works/project-1-full.jpg',
    alt: 'Проект 1',
    thumbnail: '/images/works/project-1-thumb.jpg'
  },
  // ...
];
```

## Настройка стилей

### Кастомизация через CSS переменные
```css
.our-works-swiper {
  --swiper-navigation-size: 44px;
  --swiper-theme-color: #007aff;
}
```

### Изменение breakpoints
```tsx
// В компоненте OurWorks.tsx
breakpoints={{
  640: { slidesPerView: 1.2 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
  1280: { slidesPerView: 4 },
}}
```

## Зависимости

- `swiper` - основная библиотека карусели
- `lucide-react` - иконки для навигации
- `tailwindcss` - стили

## Структура файлов

```
src/
├── components/
│   ├── OurWorks.tsx          # Основной компонент
│   ├── Lightbox.tsx          # Компонент lightbox
│   └── OurWorks/
│       └── README.md         # Документация
├── styles/
│   └── swiper-custom.css     # Кастомные стили
├── utils/
│   └── imageUtils.ts         # Утилиты для работы с изображениями
└── public/
    └── images/
        └── works/            # Папка для изображений работ
```

## Производительность

- Изображения загружаются с `loading="lazy"`
- Используются отдельные thumbnail для карусели
- Полноразмерные изображения загружаются только при открытии lightbox
- Минимальный JavaScript bundle благодаря tree-shaking Swiper.js

## Доступность

- Поддержка клавиатурной навигации
- ARIA-метки для кнопок
- Семантическая разметка
- Альтернативный текст для изображений

## Браузерная поддержка

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+