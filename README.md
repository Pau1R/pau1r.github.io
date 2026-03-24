# TechHub - Сайт для GitHub Pages

Современный адаптивный сайт для IT-компании TechHub, созданный с использованием Bootstrap 5 и готовый для развёртывания на GitHub Pages.

## 📁 Структура проекта

```
site/
├── index.html          # Главная страница
├── about.html          # О компании
├── services.html       # Услуги
├── portfolio.html      # Портфолио
├── blog.html           # Блог
├── contacts.html       # Контакты
├── faq.html            # FAQ
├── team.html           # Команда
├── pricing.html        # Цены
├── testimonials.html   # Отзывы
├── styles.css          # Стили
├── script.js           # Скрипты
└── README.md           # Этот файл
```

## 🚀 Развертывание на GitHub Pages

### Способ 1: Через интерфейс GitHub

1. Создайте новый репозиторий на GitHub с именем `имя-пользователя.github.io`
2. Загрузите все файлы проекта в репозиторий
3. Перейдите в Settings → Pages
4. В разделе "Build and deployment" выберите:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
5. Нажмите Save

### Способ 2: Через GitHub CLI

```bash
# Инициализация репозитория
git init
git add .
git commit -m "Initial commit"

# Создание репозитория на GitHub
gh repo create имя-пользователя.github.io --public --push

# Включение GitHub Pages
gh api repos/:owner/:repo/pages -X POST -f source[branch]=main
```

### Способ 3: Автоматическая настройка (Actions)

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v3
      - uses: actions/upload-pages-artifact@v2
        with:
          path: .
      - uses: actions/deploy-pages@v2
        id: deployment
```

## 🛠 Технологии

- **HTML5** - Семантическая разметка
- **CSS3** - Современные стили с анимациями
- **Bootstrap 5** - Адаптивный фреймворк
- **Font Awesome 6** - Иконки
- **JavaScript** - Интерактивность

## ✨ Особенности

- Полностью адаптивный дизайн
- 10 уникальных страниц
- Анимации при прокрутке
- Интерактивные элементы
- Валидация форм
- SEO-оптимизированная структура

## 📝 Кастомизация

### Изменение цветовой схемы

Откройте `styles.css` и измените переменные:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
}
```

### Добавление новых страниц

1. Создайте новый HTML-файл
2. Скопируйте структуру из существующих страниц
3. Добавьте ссылку в навигацию во всех файлах

### Изменение контента

- Тексты находятся в соответствующих HTML-файлах
- Изображения используют плейсхолдеры (замените на свои)
- Контактные данные в `contacts.html`

## 🔧 Локальная разработка

Для локального запуска используйте Live Server в VS Code или:

```bash
# Python 3
python -m http.server 8000

# Node.js (если установлен)
npx serve .
```

## 📱 Мобильная версия

Сайт полностью адаптирован для мобильных устройств:
- Гамбургер-меню для навигации
- Оптимизированные размеры шрифтов
- Сенсорные элементы управления

## 🌐 SEO оптимизация

- Семантические теги HTML5
- Мета-теги для каждой страницы
- Структурированные данные
- Оптимизированные изображения

## 📊 Аналитика

Для добавления Google Analytics:

1. Получите код отслеживания
2. Добавьте перед закрывающим тегом `</head>` во всех страницах:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🚨 Важные замечания

- Все ссылки на изображения используют плейсхолдеры - замените их на реальные изображения
- Форма контактов требует настройки бэкенда для отправки сообщений
- Карта в контактах требует API-ключ Google Maps
- Видео-отзывы требуют реальных YouTube видео

## 📄 Лицензия

MIT License - свободно используйте для своих проектов.

## 🤝 Вклад

欢迎贡献! Fork репозитория и создайте Pull Request.
