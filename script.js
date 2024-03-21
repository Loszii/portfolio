//scrolling with sticky navBar
document.querySelectorAll("nav a").forEach((baseElement) => {
    baseElement.addEventListener('click', function (e) { //e is click event
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navHeight = document.querySelector("nav").offsetHeight; // nav bar height
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
  
        window.scrollTo({top: targetPosition, behavior: 'smooth'});
    });
});


