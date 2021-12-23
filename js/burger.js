'use strict';

const burger = document.querySelector('.burger'),
    burgerLine = document.querySelector('.burger__line'),
    navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    navigation.classList.toggle('navigation_active');
})