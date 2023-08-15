import topSlider from "./modules/top-slider";
import video from "./modules/video";
import starRating from "./modules/stars";
import timer from "./modules/timer";
import rangeSlider from "./modules/range-slider";
import selects from "./modules/selects";
import tabs from "./modules/tabs";

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
    rangeSlider();
    selects('.js-choice');
    tabs('.shop-content__filter-btn', '.shop-content__inner', '.shop-content__filter-buttons', 'shop-content__filter-btn--active')
});