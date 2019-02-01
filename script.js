document.addEventListener("DOMContentLoaded", () => {

    function smoothScroll(e) {
        let id = this.getAttribute('href');
        if(id.includes('#')) {
            e.preventDefault();
            let element = document.querySelector(id);

            window.scrollBy({
                top: element.offsetTop - 60,
                left: 0,
                behavior: 'smooth'
            });
        }
        toggleMenu();
    }

    function toggleMenu() {
        document.querySelector('.burger').classList.toggle('active');
        document.querySelector('.menu-lists').classList.toggle('active');
    }

    function menuActiveChange() {
        let contact = document.querySelector('#contact');
        let lis = document.querySelectorAll('.menu-lists li');
        let contactLi = document.querySelector(".menu-lists li.contact");
        let actualLi = document.querySelector('.menu-lists li.main');

        if (window.scrollY >= (contact.offsetTop - (window.innerHeight * 0.75))) {
            for (let li of lis) li.classList.remove('active');
            contactLi.classList.add('active');
        } else {
            for (let li of lis) li.classList.remove('active');
            actualLi.classList.add('active');
        }		
    }

    function showContactPopup() {
        //okno
    }

    document.querySelector('.burger').addEventListener("click", toggleMenu);
    document.querySelector('body').addEventListener("mouseleave", showContactPopup);

    let links = document.querySelectorAll("a");
    for(let link of links) {
        link.addEventListener("click", smoothScroll);
    }

    window.addEventListener("scroll", menuActiveChange);
	
});