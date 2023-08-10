import topSlider from "./modules/top-slider";
import video from "./modules/video";
import starRating from "./modules/stars";
import timer from "./modules/timer";

window.addEventListener('DOMContentLoaded', () => {
    topSlider('.top-slider__inner', 1);
    video();
    starRating('.product-item--1 .stars i', 'active');
    starRating('.product-item--2 .stars i', 'active');
    starRating('.product-item--3 .stars i', 'active');
    starRating('.product-item--4 .stars i', 'active');
    starRating('.product-item--5 .stars i', 'active');
    starRating('.product-item--6 .stars i', 'active');
    timer('.promo__timer', '2023-09-01');
});