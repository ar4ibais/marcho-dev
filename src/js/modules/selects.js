import Choices from "choices.js";

const selects = (select) => {
    const elems = document.querySelectorAll(select);
    elems.forEach(elem => {
        if (elem.tagName == 'SELECT') {
            const choices = new Choices(elem, {
                searchEnabled: false,
                itemSelectText: ''
            });
        }
    })
};

export default selects;