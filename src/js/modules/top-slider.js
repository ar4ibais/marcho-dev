import { tns } from "tiny-slider";

const topSlider = (sliderBlock, itemsNum) => {
    const slider = tns({
        container: sliderBlock,
        items: itemsNum,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        autoplayTimeout: 3000,
        mouseDrag: true
    });
    slider.play();
};

export default topSlider;