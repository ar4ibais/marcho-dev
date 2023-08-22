const thumbSlider = () => {
    const thumbs = document.querySelectorAll('.product-slide__thumbs img'),
        bigSlide = document.querySelector('.product-slide__big');

    thumbs[0].classList.add('active');
    bigSlide.innerHTML = `
            <img class="product-slide__item" src="../img/product-page/${1}.jpg" alt="img">
            `;

    thumbs.forEach((thumb, i) => {
        thumb.addEventListener('click', () => {
            bigSlide.innerHTML = `
            <img data-fancybox class="product-slide__item" src="../img/product-page/${i + 1}.jpg" alt="img">
            `;
        });
    });
};

export default thumbSlider;