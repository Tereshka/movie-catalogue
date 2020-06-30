## Master class. React.js + Redux application: Movie catalogue
  LiveDemo: https://tereshka.github.io/reactwarriors-master-class

## Main purpose:
Create a movie catalogue using `themoviedb.org` api

On the main page:
- load movies sorted by popularity, revenue and release date
- filter movies by release year and genres
- clear all filters
- on About button click you can see a description
- on title click you can see more movie details

On the movie page you can see:
- a poster, description and main information about the movie
- a tab with related videos
- a tab with actors

In user menu there are:
- log out option
- link to favorite movies
- link to will watch list

There is a login modal on the first application load. If you have a `themoviedb.org` account, you can load see your favorite and will watch lists. There will be like and bookmarks icons on the movie cardsa after authorization.

Parameters in .env file:
```
REACT_APP_API_KEY=your_key
REACT_APP_API_URL=https://api.themoviedb.org/3/
```

Posters path:
```
https://image.tmdb.org/t/p/w500${path}
```

## Суть проекта:
Используя апи от `themoviedb.org` реализовать каталог фильмов

На Главной реализованы:
- вывод фильмов в сортировке по популярности (по умолчанию), доходу и дате выхода
- фильтр по году выхода и по жанрам, очистка всех фильтров
- по нажатию на кнопку About можно увидеть описание фильма
- по нажатию на заголовок в карточке фильма откроется полная информация о фильме

На странице фильма можно увидеть:
- постер, краткое описание и основная информация по фильму
- вкладка с доступными видео, которые открываются в новой вкладке
- вкладка с актерами

При клике на пользователя в меню можно:
- выйти из аккаунта
- перейти в раздел с Избранными фильмами
- перейти в раздел с фильмами на Просмотр

При первом заходе в каталог появляется диалоговое окно, позволяющее авторизоваться тем, у кого есть учтеная запись в `themoviedb.org`. В противном случае можно авторизваться через кнопку в верхнем правом углу. После авторизации у карточек фильмов появятся иконки, позволяющие добавить фильм в Избранное и На просмотр.

В файле .env использованы переменные:
```
REACT_APP_API_KEY=your_key
REACT_APP_API_URL=https://api.themoviedb.org/3/
```

Путь для постеров:
```
https://image.tmdb.org/t/p/w500${path}
```
