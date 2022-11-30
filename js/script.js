"use strict";

const number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
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

if (personalMovieDB.count < 10) {
    console.log('Мало фильмов посмотрел');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Вы база');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы прям киноман');
} else {
    console.log('ошибка');
}


console.log(personalMovieDB);

