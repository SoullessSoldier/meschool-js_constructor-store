'use strict';

const buttonOrderItems = document.querySelectorAll('.product__button_order'),
    overlayOrder = document.querySelector('.overlay__order'),
    modalOrder = document.querySelector('.modal__order');


buttonOrderItems.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', (e)=>{
        const parentBlock = e.target.closest('.product__content');                
        overlayOrder.classList.add('overlay__active');
        modalOrder.value = parentBlock.querySelector('.product__title').textContent;    
    });
});

overlayOrder.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('.overlay__order') || target.closest('.modal__close')) {
        overlayOrder.classList.remove('overlay__active');
    }    
});