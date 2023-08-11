const starRating = (parentSelector, activeClass) => {
    const stars = document.querySelectorAll(parentSelector);

    stars.forEach((star, ind1) => {
        star.addEventListener('click', () => {
            stars.forEach((star, ind2) => {
                ind1 >= ind2 ? star.classList.add(activeClass) :star.classList.remove(activeClass)
            });
        });
    });
};

export default starRating;