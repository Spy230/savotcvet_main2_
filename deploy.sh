#!/bin/bash

# Сборка проекта
echo "🔨 Сборка проекта..."
npm run build

# Переход в папку сборки
cd dist

# Инициализация git репозитория
git init
git add -A
git commit -m "Deploy: $(date)"

# Отправка в ветку gh-pages
git push -f https://github.com/Spy230/spy230.github.io.git main:gh-pages

cd ..

echo "✅ Деплой завершен! Сайт доступен по адресу: https://spy230.github.io"