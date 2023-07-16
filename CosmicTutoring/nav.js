const navSlide = () => {
    const burger = document.querySelector('.navbar-toggle');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
    });
}

navSlide();