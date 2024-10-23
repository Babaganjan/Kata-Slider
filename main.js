"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const swiperClass = '.slider-one';
    let swiper = null;

    const initSwiper = (slidesPerView) => {
        // Уничтожаем предыдущий слайдер, если он существует
        if (swiper) {
            swiper.destroy(true, true);
        }

        swiper = new Swiper(swiperClass, {
            loop: true,
            spaceBetween: 16,
            slidesPerView: slidesPerView,
            pagination: {
                el: '.slider-pagination',
                clickable: true,
            },
        });
    };

    const checker = () => {
        const width = window.innerWidth;

        if (width < 460) {
            initSwiper(1.23); // Для ширины меньше 460px
        } else if (width < 640) {
            initSwiper(1.70); // Для ширины от 460px до 639px
        } else if (width < 768) {
            initSwiper(2.50); // Для ширины от 640px до 767.9px
        } else {
            // Если ширина 768px и выше, уничтожаем слайдер
            if (swiper) {
                swiper.destroy(true, true);
                swiper = null;

                const paginationElement = document.querySelector('.slider-pagination');
                if (paginationElement) {
                    paginationElement.innerHTML = ''; // Очищаем пагинацию
                }
            }
            return
        }
    };

    window.addEventListener('resize', checker);
    checker(); // Инициируем проверку при загрузке
});

// -------------------------------------------------------------------------------------------------------------------

const brandsContainer = document.querySelector('.container--height');
let brandsBtn;

// Функция для создания кнопки
function createBrandsBtn(text) {
    if (!brandsBtn) {
        const arrowBtnBottom = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5001 7.50008L12.0001 10.0001L9.50008 7.50008C9.22393 7.22393 8.77622 7.22393 8.50008 7.50008C8.22393 7.77622 8.22393 8.22393 8.50008 8.50008L11.293 11.293C11.6835 11.6835 12.3167 11.6835 12.7072 11.293L15.5001 8.50008C15.7762 8.22393 15.7762 7.77622 15.5001 7.50008C15.2239 7.22393 14.7762 7.22393 14.5001 7.50008ZM14.5001 13.5001L12.0001 16.0001L9.50008 13.5001C9.22393 13.2239 8.77622 13.2239 8.50008 13.5001C8.22393 13.7762 8.22393 14.2239 8.50008 14.5001L11.293 17.293C11.6835 17.6835 12.3167 17.6835 12.7072 17.293L15.5001 14.5001C15.7762 14.2239 15.7762 13.7762 15.5001 13.5001C15.2239 13.2239 14.7762 13.2239 14.5001 13.5001Z" fill="#41F6D7"/>
        </svg>`
        brandsBtn = document.createElement('button');
        brandsBtn.classList.add('brands-btn', 'btn-reset')
        brandsBtn.innerHTML = `${arrowBtnBottom} ${text}`;
        brandsContainer.append(brandsBtn);

        brandsBtn.addEventListener('click', toogleBradsBtn);
    }
}

// Функция для удаления кнопки
function removeBrandsBtn() {
    if (brandsBtn) {
        brandsContainer.removeChild(brandsBtn);
        brandsBtn = null;
    }
}

// Функция для проверки ширины окна
function checkWidth() {
    if (window.innerWidth >= 768) {
        createBrandsBtn('Показать все'); // Показываем кнопку
    } else {
        removeBrandsBtn(); // Удаляем кнопку
    }
}

// Проверяем ширину окна при загрузке страницы
window.onload = checkWidth;

// Добавляем обработчик события изменения размера окна
window.addEventListener('resize', checkWidth);

// Функция для переключения состояния отображения содержимого
function toogleBradsBtn() {
    const swiperContainer = document.querySelector('.image-slider');
    swiperContainer.classList.toggle('expanded');

    if (swiperContainer.classList.contains('expanded')) {
        swiperContainer.style.maxHeight = "200px";
        setTimeout(() => {
            const arrowBtnBottom = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5001 7.50008L12.0001 10.0001L9.50008 7.50008C9.22393 7.22393 8.77622 7.22393 8.50008 7.50008C8.22393 7.77622 8.22393 8.22393 8.50008 8.50008L11.293 11.293C11.6835 11.6835 12.3167 11.6835 12.7072 11.293L15.5001 8.50008C15.7762 8.22393 15.7762 7.77622 15.5001 7.50008C15.2239 7.22393 14.7762 7.22393 14.5001 7.50008ZM14.5001 13.5001L12.0001 16.0001L9.50008 13.5001C9.22393 13.2239 8.77622 13.2239 8.50008 13.5001C8.22393 13.7762 8.22393 14.2239 8.50008 14.5001L11.293 17.293C11.6835 17.6835 12.3167 17.6835 12.7072 17.293L15.5001 14.5001C15.7762 14.2239 15.7762 13.7762 15.5001 13.5001C15.2239 13.2239 14.7762 13.2239 14.5001 13.5001Z" fill="#41F6D7"/>
                </svg>`
                brandsBtn.innerHTML = `${arrowBtnBottom}Показать все`;
        }, 400);
    } else {
        const arrowBtnUp = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.49992 16.4999L11.9999 13.9999L14.4999 16.4999C14.7761 16.7761 15.2238 16.7761 15.4999 16.4999C15.7761 16.2238 15.7761 15.7761 15.4999 15.4999L12.707 12.707C12.3165 12.3165 11.6833 12.3165 11.2928 12.707L8.49992 15.4999C8.22378 15.7761 8.22378 16.2238 8.49992 16.4999C8.77607 16.7761 9.22378 16.7761 9.49992 16.4999ZM9.49992 10.4999L11.9999 7.99992L14.4999 10.4999C14.7761 10.7761 15.2238 10.7761 15.4999 10.4999C15.7761 10.2238 15.7761 9.77607 15.4999 9.49992L12.707 6.70703C12.3165 6.31651 11.6833 6.31651 11.2928 6.70703L8.49992 9.49993C8.22378 9.77607 8.22378 10.2238 8.49992 10.4999C8.77607 10.7761 9.22378 10.7761 9.49992 10.4999Z" fill="#41F6D7"/>
</svg>`
        swiperContainer.style.maxHeight = "1000px";
        brandsBtn.innerHTML = `${arrowBtnUp}Скрыть`;
    }
}


 
