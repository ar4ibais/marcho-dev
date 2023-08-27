const prodRate = () => {
    const
        rates = document.querySelectorAll('.product-add__rating-star'),
        ratesParent = document.querySelector('.product-add__rating'),
        stars = ratesParent.querySelectorAll('.star path');

    function nonActiveStar() {
        stars.forEach(star => star.style.fill = '#ccccce');
    }

    function activeStar(i) {
        rates[i].querySelectorAll('.star path').forEach(star => star.style.fill = '#ffc35b');
    }

    nonActiveStar();
    activeStar(0);


    ratesParent.addEventListener('click', e => {
        if (e.target.classList.contains('product-add__rating-star') || e.target.parentNode.parentNode.classList.contains('product-add__rating-star') || e.target.parentNode.classList.contains('product-add__rating-star')) {
            rates.forEach((rate, i) => {
                if (e.target.parentNode.parentNode == rate || e.target.parentNode == rate || e.target == rate) {
                    nonActiveStar();
                    activeStar(i);
                }
            });
        }
    });
};

export default prodRate;