import Choices from "choices.js";

const selects = (select) => {
    const elems = document.querySelectorAll(select);
    elems.forEach(elem => {
        const choices = new Choices(elem, {
            searchEnabled: false,
            itemSelectText: ''
        });
    })
};

export default selects;