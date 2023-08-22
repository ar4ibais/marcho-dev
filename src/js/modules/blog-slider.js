import { tns } from "tiny-slider";

const blogSlider = (sliderBlock, itemsNum) => {
    const slider = tns({
        container: sliderBlock,
        items: itemsNum,
        autoplay: true,
        autoplayTimeout: 3000,
        mouseDrag: true,
        nav: false,
        autoplayButtonOutput: false
    });

    slider.play();
};

export default blogSlider;