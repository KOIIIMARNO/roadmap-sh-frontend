function openAccordionItem() {
   const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-item-button');
        const accordionbody = item.querySelector('.accordion-body');
        
        button.addEventListener('click', () => {

            const IsCurrentlyActive = accordionbody.classList.contains('active');

            closeAllAcordeon();
            
            if (!IsCurrentlyActive) {
                accordionbody.classList.add('active');
                button.classList.add('active');
            }
    });
});
}

function closeAllAcordeon() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    

    accordionItems.forEach(item => {
        const accordionbody = item.querySelector('.accordion-body');
        const button = item.querySelector('.accordion-item-button');
        accordionbody.classList.remove('active');
        button.classList.remove('active');

    });
}
openAccordionItem();