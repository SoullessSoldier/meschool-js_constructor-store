'use strict';

const BACKEND_URL = 'https://jsonplaceholder.typicode.com/posts';

const buttonOrderItems = document.querySelectorAll('.product__button_order'),
    overlayOrder = document.querySelector('.overlay__order'),
    modalOrder = document.querySelector('.modal__order'),
    modalForm = document.querySelector('.modal__form'),
    modalResult = document.querySelector('.modal__result');


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
        modalResult.textContent = '';
        overlayOrder.classList.remove('overlay__active');
    }    
});

modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    new FormData(modalForm);    
});

modalForm.addEventListener('formdata', e => {    
    let data = e.formData;
    let result = '';

    modalResult.textContent = '';

    fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
        body: JSON.stringify(Object.fromEntries(data.entries()))
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    })
    .then(data => {
        console.log(data);
        result = 'Форма успешно отправлена';
    })
    .catch(err => {
        console.warn(err);
        result = 'Ошибка отправки формы';
    })
    .finally(()=>{
            modalResult.textContent = result;
            modalForm.reset();
            //overlayOrder.classList.remove('overlay__active')
        }        
    );
});