"use strict";

let number0Films;

function start() {
    number0Films = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (number0Films == '' || number0Films == null || isNaN(number0Films)) {
        number0Films = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('да!');
        } else {
            console.log('нет!');
            i--;
            alert('ответье на вопросы!');
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Мало фильмов посмотрел');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Вы база');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы прям киноман');
    } else {
        console.log('ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
