const open = document.querySelector('.burger-icon');
const close = document.querySelector('.close-icon');

const nav = document.querySelector('.mobile-nav__list');

open.addEventListener('click', () => {

    close.classList.toggle('hide');
    open.classList.toggle('hide');
    nav.classList.toggle('hide');
});

close.addEventListener('click', () => {
    close.classList.toggle('hide');
    open.classList.toggle('hide');
    nav.classList.toggle('hide');
})

open();