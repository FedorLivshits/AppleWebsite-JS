document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const tabs = () => {
        const cardDetailChange = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitle = document.querySelector('.card-details__title');
        const cardImageItem = document.querySelector('.card__image_item');
        const cardDetailsPrice = document.querySelector('.card-details__price');
        console.log(cardDetailChange)
        console.log(cardDetailsTitle)
        console.log(cardImageItem)
        console.log(cardDetailsPrice)
        const data = [
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: 95900,
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
                img: 'img/iPhone-silver.png',
                price: 97900,
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: 99900,
            }
        ]
        const deactivate = () => {
            cardDetailChange.forEach(btn => btn.classList.remove('active'));
        }
        cardDetailChange.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if(!btn.classList.contains('active')){
                    deactivate();
                    btn.classList.add('active');
                    cardDetailsTitle.textContent = data[i].name;
                    cardImageItem.src = data[i].img;
                    cardImageItem.alt = data[i].name;
                    cardDetailsPrice.textContent = data[i].price + '₽';
                }
            })
        })
    }
    tabs()
})
