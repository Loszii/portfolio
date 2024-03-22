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


//tech animation
const scrollers = document.querySelectorAll("#scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { //user doesnt have reduced motion on
    addAnimation();
}
function addAnimation() {
    scrollers.forEach( scroller => {
        scroller.setAttribute("data-animated", true);
        const techList = scroller.querySelector("#tech-list");
        const techListContent = Array.from(techList.children);
        
        techListContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            techList.appendChild(duplicatedItem);
        }); 
    });
}

