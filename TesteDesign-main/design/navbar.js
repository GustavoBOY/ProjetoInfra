class MenuNavbar{
    constructor(menu, navList, navLinks){
        this.menuNavbar = document.querySelector(menu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks(){
        this.navLinks.forEach((link) =>{
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animateLinks = `navLinkFade 0.5s ease forwards $ {index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.menuNavbar.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuNavbar){
            this.addClickEvent();
        }
        return this;
    }
}
const menuNavbar = new MenuNavbar(
    ".menu",
    ".nav-list",
    ".nav-list li",
);
menuNavbar.init();
