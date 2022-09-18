/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};

const
  promo = document.querySelector('.promo'),
  adv = promo.querySelectorAll('.promo__adv img'),
  promoGenre = promo.querySelector('.promo__genre'),
  promoBg = promo.querySelector('.promo__bg'),
  interactiveList = promo.querySelector('.promo__interactive-list'),
  interactiveItem = promo.querySelectorAll('.promo__interactive-item');

adv.forEach(item => {
  item.remove();
});

promoGenre.textContent = 'ДРАМА';

promoBg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';

movieDB.movies.sort();

interactiveItem.forEach((item, i) => {
  item.innerHTML = `
    ${i + 1}. ${movieDB.movies[i]}
    <div class="delete"></div>
  `;
});

