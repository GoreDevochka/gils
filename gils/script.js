
    const leftView = document.getElementById('leftView');
    const mainView = document.getElementById('mainView');
    const rightView = document.getElementById('rightView');

    // Images for the slider
    // const images = [
    //     './images/image206.png',
    //     './images/image207.png',
    //     './images/image205.png',
    //     // Add more image paths as needed
    // ];

    let currentIndex = 0;

    function updateSlider() {
        mainView.querySelector('img').src = images[currentIndex];
        leftView.querySelector('img').src = images[(currentIndex - 1 + images.length) % images.length];
        rightView.querySelector('img').src = images[(currentIndex + 1) % images.length];
    }

    document.getElementById('navLeft').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    document.getElementById('navRight').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    // Initial setup
    updateSlider();

