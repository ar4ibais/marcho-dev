import { tns } from "tiny-slider";

const topSlider = () => {
    const slider = tns({
        container: '.top-slider__inner',
        items: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        autoplayTimeout: 3000,
        mouseDrag: true
    });
    slider.play();
};

export default topSlider;