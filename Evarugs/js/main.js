const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    loop: true,
    speed: 400, 
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1
    //     }
    // }
});

const buttonModal = document.querySelector(".main-display__button");
const modal = document.querySelector('.modal');


buttonModal.addEventListener('click', () => {
    modal.classList.add('active');
})

modal.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        modal.classList.remove("active");
    }
})


