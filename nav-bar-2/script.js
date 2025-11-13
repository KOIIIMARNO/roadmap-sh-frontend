document.addEventListener("DOMContentLoaded", function () { 
    
    const tabLinks = document.querySelectorAll('.tab-link'); 
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault()

            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));

            this.classList.add('active');
            
            const currentTab = this.getAttribute('href'); 
            document.querySelector(currentTab).classList.add('active');
        });
    });
});