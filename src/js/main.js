import topSlider from "./modules/top-slider";
import video from "./modules/video";
import starRating from "./modules/stars";
import timer from "./modules/timer";
import rangeSlider from "./modules/range-slider";
import selects from "./modules/selects";
import tabs from "./modules/tabs";
import prodRate from "./modules/product-rating";
import thumbSlider from "./modules/thumbs-slider";
import stepper from "./modules/stepper";
import blogSlider from "./modules/blog-slider";






window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.top-slider__inner')) {
        topSlider('.top-slider__inner', 1);
    }
    if (document.querySelector('.promo__timer')) {
        timer('.promo__timer', '2023-09-01');
    }
    video();
    starRating('.product-item--1 .stars i', 'active');
    starRating('.product-item--2 .stars i', 'active');
    starRating('.product-item--3 .stars i', 'active');
    starRating('.product-item--4 .stars i', 'active');
    starRating('.product-item--5 .stars i', 'active');
    starRating('.product-item--6 .stars i', 'active');
    if (document.querySelector('.filter-price')) {
        rangeSlider();
    }
    selects('.js-choice');
    if (document.querySelector('.shop-content__filter-buttons')) {
        tabs('.shop-content__filter-btn', '.shop-content__inner', '.shop-content__filter-buttons', 'shop-content__filter-btn--active');
    }
    if (document.querySelector('.product-tabs__item')) {
        tabs('.product-tabs__item', '.product-tabs__content', '.product-tabs__inner', 'product-tabs__item--active');
    }
    if (document.querySelector('.product-add__rating')) {
        prodRate();
    }
    if (document.querySelector('.product-slide__big')) {
        thumbSlider();
    }

    if (document.getElementById('increment')) {
        document.getElementById('increment').addEventListener('click', e => {
            e.preventDefault();
            stepper(document.getElementById('increment'));
        });
        document.getElementById('decrement').addEventListener('click', e => {
            e.preventDefault();
            stepper(document.getElementById('decrement'));
        });
    }

    if (document.querySelector('.blog-page__item--slider')) {
        blogSlider('.blog-page__item--slider', 1)
    }

    // Adaptive

    document.querySelector('.menu__btn').addEventListener('click', () => {
        document.querySelector('.menu__list').classList.toggle('menu__list--active');
    });
});