'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
    movieList = promo.querySelector('.promo__interactive-list'),
    movieItem = promo.querySelectorAll('.promo__interactive-item'),
    addForm = document.querySelector('.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', event => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log('Добавляем любимый фильм');
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  const deleteAdv = arr => {
    arr.forEach(item => {
      item.remove();
    });
  };

  const makeChanges = () => {
    promoGenre.textContent = 'ДРАМА';

    promoBg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';
  };

  const sortArr = arr => {
    arr.sort();
  };

  const createMovieList = (films, parent) => {
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
          <div class="delete"></div>
        </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  };

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});