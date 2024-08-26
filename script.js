document.getElementById('wrapper').onclick = function () {
    var className = ' ' + wrapper.className + ' ';

    this.className = ~className.indexOf(' active ')
        ? className.replace(' active ', ' ')
        : this.className + ' active';
};


// card section js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const section = document.querySelectorAll('.section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = document.querySelector(button.getAttribute('data-target'));

            section.forEach(section => {
                section.classList.remove('active');
            });
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            targetSection.classList.add('active');
            button.classList.add('active');
        });
    });
});