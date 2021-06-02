document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // TABS
    const tabs = () => {
        const cardDetailChange = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitle = document.querySelector('.card-details__title');
        const cardImageItem = document.querySelector('.card__image_item');
        const cardDetailsPrice = document.querySelector('.card-details__price');

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
        ];

        const deactivate = () => {
            cardDetailChange.forEach(btn => btn.classList.remove('active'));
        };

        cardDetailChange.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('active')) {
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

    // ACCORDION
    const accordion = () => {
        const characteristicsList = document.querySelector('.characteristics__list');
        const characteristicsItem = document.querySelectorAll('.characteristics__item');

        const open = (btn, dropdown) => {
            closeAllDrops(btn, dropdown)
            dropdown.style.height = `${dropdown.scrollHeight}px`
            btn.classList.add('active');
            dropdown.classList.add('active');
        }

        const close = (btn, dropdown) => {
            btn.classList.remove('active');
            dropdown.classList.remove('active');
            dropdown.style.height = '0';
        }

        const closeAllDrops = (btn, dropdown) => {
            characteristicsItem.forEach(item => {
                if (item.children[0] !== btn) {
                    close(item.children[0], item.children[1]);
                }
            })
        }

        characteristicsList.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('characteristics__title')) {
                const parent = target.closest('.characteristics__item');
                const descr = parent.querySelector('.characteristics__description');
                descr.classList.contains('active') ? close(target, descr) : open(target, descr);
            }
        })
    }

    //Modal
    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
        const modal = document.querySelector('.modal');

        const closeModal = () => {
            modal.classList.remove('open', 'fade');
            document.body.style.overflow = '';
        }

        const showModal = () => {
            modal.classList.add('open', 'fade');
            document.body.style.overflow = 'hidden';
        }

        cardDetailsButtonBuy.addEventListener('click', () => {
            showModal();
        });

        modal.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('modal__close') || target.classList.contains('modal')) {
                closeModal();
            }
        });

    }

    tabs();
    accordion();
    modal();
})
