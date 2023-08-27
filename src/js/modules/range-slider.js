import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const rangeSlider = () => {
    const slider = document.querySelector('.filter-price__slider');

    

    noUiSlider.create(slider, {
        start: [200, 800],
        connect: true,
        range: {
            'min': [0],
            'max': [999]
        },
        format: wNumb({
            decimals: 0,
            thousand: '.',
            prefix: '$'
        })
    });

    const skipValues = [
        document.querySelector('.skip-value-lower'),
        document.querySelector('.skip-value-upper')
    ];
    
    slider.noUiSlider.on('update', function (values, handle) {
        skipValues[handle].innerHTML = values[handle];
    });

};

export default rangeSlider;