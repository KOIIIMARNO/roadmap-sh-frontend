function validateTextarea() {
    const textarea = document.querySelector('.dynamic-textarea');
    const counter = document.querySelector('.textarea-counter');

    const limit = 100;
    counter.textContent = 0 + '/' + limit

    textarea.addEventListener('input', () => {
        textarea.value = textarea.value.substring(0, limit);
        const textLength = textarea.value.length;
        counter.textContent = textLength + '/' + limit;

        if (textLength >= limit) {   
            textarea.classList.add('limit-reached');
            counter.classList.add('limit-reached');
        } else {
            textarea.classList.remove('limit-reached');
            counter.classList.remove('limit-reached');
        }
    })

    
}
validateTextarea()