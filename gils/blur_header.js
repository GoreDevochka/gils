
const links = document.querySelectorAll('.header nav ul li a');
const mainContent = document.querySelector('main');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        mainContent.classList.add('blur');
    });

    link.addEventListener('mouseleave', () => {
        mainContent.classList.remove('blur');
    });
});
