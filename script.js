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
        closeMenu();
    }

    let toggleMenu = () => {
        document.querySelector('.burger').classList.toggle('active');
        document.querySelector('.menu-lists').classList.toggle('active');
    }

    let closeMenu = () => {
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.menu-lists').classList.remove('active');
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

    let furnituresBlurSize = () => {
        [...document.querySelectorAll('.step.furniture')].forEach(el => {
            let imgs = el.childNodes;
            for(let i=0; i<imgs.length;i++) {
                if(imgs[i].className == 'blur') {
                    console.log(imgs[i].childNodes[1].style);
                    imgs[i].childNodes[1].style.minWidth =
                        el.clientWidth + 10 + "px";
                    imgs[i].childNodes[1].style.minHeight =
						el.clientHeight + 10 + "px";
                }
            }
        });
       /* [...document.querySelectorAll(".blur img")].forEach( el => {
            el
            el.style
		});*/
    }
    furnituresBlurSize();

    let squareBox = () => {
        let squares = document.querySelectorAll('.columns .square');

        for(let box of squares) {
            box.style.height = box.clientWidth + 'px';
        }
    } 
    squareBox();

    document.querySelector('.burger').addEventListener("click", toggleMenu);
    document.querySelector('body').addEventListener("mouseleave", showContactPopup);

    let links = document.querySelectorAll("a");
    for(let link of links) {
        link.addEventListener("click", smoothScroll);
    }

    window.addEventListener("scroll", menuActiveChange);
	
});

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    document.querySelector('#loader').style.display = 'none';
})