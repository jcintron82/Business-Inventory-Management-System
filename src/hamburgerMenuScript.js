

const hamburger = document.getElementById('burger');
const navbarLinks = document.getElementsByClassName('navbarLinks')
const navOne = document.getElementById('navbarLinks');
const navTwo = document.getElementById('navbarLinks2');
const navThree = document.getElementById('navbarLinks3')
const linksWrap = document.getElementById('linksWrap')
const burgerWrap = document.getElementById('burgerWrap')


hamburger.addEventListener('click', () => {
    navOne.classList.toggle('burgerMenu');
    navTwo.classList.toggle('burgerMenu');
    navThree.classList.toggle('burgerMenu');
    linksWrap.classList.toggle('burgerMenu');
    burgerWrap.classList.toggle('active')
})

const loginSVG = document.getElementById('loginSVG');
loginSVG.addEventListener('click', () => {
    router.get("/login", function (req, res, next) {
        res.render("loginscreen", { title: "Form" });
        if (err) throw err;
      });
})
