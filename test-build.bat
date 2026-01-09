@echo off
echo 🔨 Тестовая сборка проекта...
call npm run build

echo 📦 Проверка содержимого dist...
dir dist

echo 🌐 Запуск локального превью...
call npm run preview

pause