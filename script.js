const navOptions = document.querySelectorAll(".sec-str");
const navOptBullets = document.querySelectorAll(".mncircle");
const bigCircle = document.querySelector(".circle");
const contentPages = document.querySelectorAll(".content");
let rotate = 0;

function setRotation(deg) {
    bigCircle.style.transform = `translate(-50%,-50%) rotate(${deg}deg)`;
}

// ---------for title typing animation----------

var typed = new Typed('#title', {
    strings: ['Web Developer', 'Front-end Developer', 'Web Designer', 'UI Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


// ----------Show pages----------

const showPage = (idx) => {

    contentPages.forEach((page) => {
        page.classList.remove("show-page");
    })

    contentPages[idx].classList.add("show-page");
}

// ----------media query----------

if (window.innerWidth <= 650) {
    rotate = -90;
    let navAngleArr = [-90, -100, -110, -120, -130, -140];


    let touchMoveValue = 0;
    let initialTouchValue = 0;
    document.body.addEventListener("touchstart", (e) => {
        initialTouchValue = Math.floor(e.touches[0].clientX);
    })
    document.body.addEventListener("touchmove", (e) => {
        // console.log(Math.floor(e.touches[0].clientY));
        touchMoveValue = (Math.floor(e.touches[0].clientX) - initialTouchValue) / 90;
        rotate = rotate + Math.floor(touchMoveValue);

        if (rotate > -90) {
            rotate = -90;
        } else if (rotate < -140) {
            rotate = -140;
        }

        setRotation(rotate);
        checkMobileActive(rotate)
    })

    function checkMobileActive(value) {
        if (value <= -90 && value >= -95) {
            checkMobileNavActive();
            showPage(0);
            navOptions[0].classList.add("active-mobile");
            navOptions[0].classList.add("active");
            navOptions[0].style.opacity = "1";
        } else if (value <= -96 && value >= -104) {
            checkMobileNavActive();
            navOptions[1].classList.add("active-mobile");
            navOptions[1].classList.add("active");
            navOptBullets[1].classList.add("active");
            navOptions[1].style.opacity = "1";
            showPage(1);
        } else if (value <= -105 && value >= -114) {
            checkMobileNavActive();
            navOptions[2].classList.add("active-mobile");
            navOptions[2].classList.add("active");
            navOptBullets[2].classList.add("active");
            navOptions[2].style.opacity = "1";
            showPage(2);
        } else if (value <= -115 && value >= -124) {
            checkMobileNavActive();
            navOptions[3].classList.add("active-mobile");
            navOptions[3].classList.add("active");
            navOptBullets[3].classList.add("active");
            navOptions[3].style.opacity = "1";
            showPage(3);
        } else if (value <= -125 && value >= -134) {
            checkMobileNavActive();
            navOptions[4].classList.add("active-mobile");
            navOptions[4].classList.add("active");
            navOptBullets[4].classList.add("active");
            navOptions[4].style.opacity = "1";
            showPage(4);
        } else if (value <= -135 && value >= -140) {
            checkMobileNavActive();
            navOptions[5].classList.add("active-mobile");
            navOptions[5].classList.add("active");
            navOptBullets[5].classList.add("active");
            navOptions[5].style.opacity = "1";
            showPage(5);
        }


        setRotation(value);
    }


    function checkMobileNavActive() {
        navOptions.forEach((opt) => {
            opt.classList.remove("active-mobile");
            opt.classList.remove("active")
            opt.style.opacity = "0.3";
        });
        navOptBullets.forEach((nav) => nav.classList.remove("active"));
    }

    navOptions.forEach((opt, index) => {
        opt.firstElementChild.style.zIndex = "2";

        opt.firstElementChild.addEventListener("click", () => {
            checkMobileNavActive();
            opt.classList.add("active");
            opt.classList.add("active-mobile");
            opt.classList.add("active-active");
            showPage(index);
            setRotation(navAngleArr[index]);
            opt.style.opacity = "1";
        })
    })

} else {

    window.addEventListener("wheel", (e) => {
        rotate = Math.max(-50, Math.min(0, rotate - Math.floor(e.deltaY / 50)));
        bigCircle.style.transform = `translate(-50%,-50%) rotate(${rotate}deg)`;
        checkAllActive(rotate);

    });


    navOptions.forEach((option, index) => {
        option.addEventListener("click", () => {
            setRotation(-index * 10);
            checkActive(option);
            showPage(index);

            navOptBullets[index].classList.add("active");
            option.classList.add("active");
        });
    });

    navOptBullets.forEach((nav, index) => {
        nav.addEventListener("click", () => {
            setRotation(-index * 10);
            checkActive(nav);
            checkAllActive(setRotation(-index * 10));
            showPage(index);

            nav.classList.add("active");
            navOptions[index].classList.add("active");
        });
    });

    function checkActive() {
        navOptions.forEach((opt) => opt.classList.remove("active"));
        navOptBullets.forEach((nav) => nav.classList.remove("active"));
    }

    function checkAllActive(value) {
        if (value <= 0 && value >= -5) {
            checkActive();
            showPage(0);
            navOptions[0].classList.add("active");
            navOptBullets[0].classList.add("active");
        } else if (value <= -6 && value >= -14) {
            checkActive();
            navOptions[1].classList.add("active");
            navOptBullets[1].classList.add("active");
            showPage(1);
        } else if (value <= -15 && value >= -24) {
            checkActive();
            navOptions[2].classList.add("active");
            navOptBullets[2].classList.add("active");
            showPage(2);
        } else if (value <= -25 && value >= -34) {
            checkActive();
            navOptions[3].classList.add("active");
            navOptBullets[3].classList.add("active");
            showPage(3);
        } else if (value <= -35 && value >= -44) {
            checkActive();
            navOptions[4].classList.add("active");
            navOptBullets[4].classList.add("active");
            showPage(4);
        } else if (value <= -45 && value >= -50) {
            checkActive();
            navOptions[5].classList.add("active");
            navOptBullets[5].classList.add("active");
            showPage(5);
        }
    }
}