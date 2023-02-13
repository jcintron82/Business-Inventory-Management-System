const observedObjectOne = document.querySelector("#parallax-break");
const observedObjectTwo = document.querySelector("#parallax-break-div");
const observeForSVG = document.querySelector(".featured-items-parallax-wrap");
const observeForSVGHide = document.querySelector(".categorylineitemsfood");

const actionObject = document.querySelector("#break-banner");
const actionObjectTwo = document.querySelector("#parallax-break-top");
const actionToTopSvg = document.querySelector("#totopsvg");
// const speed = 300;

const observerOptions = {
  root: null,
  threshold: 0.5,
  // rootMargin:
};

const objectOne = () => {
  actionObject.classList.toggle("break-banner");
};

const objectTwo = () => {
  actionObjectTwo.classList.toggle("break-banner");
};
const objectThree = () => {
  actionToTopSvg.classList.add("totopsvg");
};
const hideUpArrowSVG = () => {
  actionToTopSvg.classList.remove("totopsvg");
};

//Intersection observer to see when observedObject is in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      objectOne();
      observer.unobserve(observedObjectOne);
    }
  });
}, observerOptions);

const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      objectTwo();
      observer.unobserve(observedObjectTwo);
    }
  });
}, observerOptions);

const observer3 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      objectThree();
      // observer.unobserve(observeForSVG);
    }
  });
}, observerOptions);

const observer4 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      hideUpArrowSVG();
    }
  });
}, observerOptions);

//Call the observe function on the observed object
observer.observe(observedObjectOne);
observer2.observe(observedObjectTwo);
observer3.observe(observeForSVG);
observer4.observe(observeForSVGHide);
