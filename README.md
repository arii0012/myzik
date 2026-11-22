# Dynamic Story Widgets Player

Веб-плеер в эстетике iPadOS: локальная музыка, поиск iTunes, тексты LRCLIB, караоке-подсветка строк, автоматические сюжетные виджеты и редактор сценариев.

## Запуск

Требуется Node.js 20+.

```bash
npm install
npm run dev
```

Откройте адрес, который покажет Vite (обычно http://localhost:5173).

## Сборка

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Создайте репозиторий `dynamic-story-player` и загрузите содержимое архива в корень ветки `main`.
2. В Settings → Pages выберите **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` проверит TypeScript, соберёт проект и опубликует `dist`.

Если имя репозитория отличается от `dynamic-story-player`, поменяйте `base` в `vite.config.ts` на `/<имя-репозитория>/`.

## Возможности и ограничения

- Поиск каталога iTunes и превью доступны при подключении к интернету; полноформатные аудиофайлы сервис не предоставляет.
- Можно открыть локальные MP3/WAV/OGG/FLAC (поддержка кодека зависит от браузера).
- Тексты запрашиваются у LRCLIB; наличие синхронизированного текста не гарантируется для каждой записи.
- Виджеты для произвольных песен создаются эвристически по ключевым словам. Для точного сюжета используйте Story Studio.
- Синхронизация караоке идёт по таймкодам LRC, а не по отдельным словам, если word-level тайминги отсутствуют.
- Внешние API работают в браузере и могут быть ограничены сетью/CORS.

## Стек
React 18, TypeScript strict, Vite, Tailwind CSS, Framer Motion, Lucide React, HTMLAudioElement, Web Audio API, Media Session API.
