const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button_icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', () => {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoFile = document.querySelector('#video-story');
const videoOverlay = document.querySelector('#video-story-overlay');

videoBtn.addEventListener('click', () => {

    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }

    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = "img/pause_icon-icons.com_67944.svg";

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;
    } else {
        videoFile.pause();
        videoBtnIcon.src = "img/play-white.svg";
        videoOverlay.onmouseleave = null;
    }
});
