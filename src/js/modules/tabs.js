const tabs = (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) => {
    // Tabs

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.classList.contains(tabsSelector.slice(1)) || target.tagName == 'path' || target.tagName == 'svg') {
            tabs.forEach((item, i) => {
                if (target.parentNode.parentNode == item || target.parentNode == item || target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        } else {
            console.log('fuck');
        }   
    });
};


export default tabs;