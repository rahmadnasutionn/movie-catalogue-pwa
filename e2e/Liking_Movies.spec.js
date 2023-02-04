// eslint-disable-next-line no-undef
Feature('Liking Movies');

// eslint-disable-next-line no-undef
Before(({ I }) => {
    I.amOnPage('/#/like');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked movies', ({ I }) => {
    I.seeElement('#movies');
    I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
});

Scenario('liking one movie', ({ I }) => {
    I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

    I.amOnPage('/');

    I.seeElement('.movie__title a');
    I.click(locate('.movie__title a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.movie-item');
});