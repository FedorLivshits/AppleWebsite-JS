document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Fetch request
    const renderCrossSellList = () => {
        const crossSellList = document.querySelector('.cross-sell__list');

        const getData = () => {
            fetch('cross-sell-dbase/dbase.json')
                .then(response => response.json())
                .then(data => {
                    data.forEach(item => {
                        makeCrossSellListElement(item);
                    })
                })
                .catch(error => alert('Ошибка: ' + error.message));
        }

        const makeCrossSellListElement = (item) => {
            crossSellList.innerHTML += `
            <li>
                 <article class="cross-sell__item">
                    <img class="cross-sell__image" src=${item.photo} alt=${item.name}>
                    <h3 class="cross-sell__title">${item.name}</h3>
                    <p class="cross-sell__price">${item.price}₽</p>
                    <div class="button button_buy cross-sell__button">Купить</div>
                 </article>
            </li>
            `
        }
        getData();
    }

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
            cardDetailChange.forEach(btn => {
                btn.classList.remove('active');
            });
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

        const closeAllDrops = (btn) => {
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
        const cardDetailsButtonDelivery = document.querySelector('.card-details__button_delivery');
        const cardDetailsTitle = document.querySelector('.card-details__title');
        const modal = document.querySelector('.modal');
        const modalTitle = document.querySelector('.modal__title');
        const modalSubtitle = document.querySelector('.modal__subtitle')

        const closeModal = () => {
            modal.classList.remove('open', 'fade');
            document.body.style.overflow = '';
        }

        const showModal = (btn) => {
            modal.classList.add('open', 'fade');
            modalTitle.textContent = cardDetailsTitle.textContent;
            if (btn === cardDetailsButtonBuy) {
                modalSubtitle.textContent = 'Оплата';
            }
            if (btn === cardDetailsButtonDelivery) {
                modalSubtitle.textContent = 'Доставка и оплата';
            }
            document.body.style.overflow = 'hidden';
        }

        [cardDetailsButtonBuy, cardDetailsButtonDelivery].forEach(btn => {
            btn.addEventListener('click', (e) => {
                console.log(e.target)
                showModal(e.target);
            });
        })

        modal.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('modal__close') || target === modal) {
                closeModal();
            }
        });

    }

    tabs();
    accordion();
    modal();
    renderCrossSellList();
})
