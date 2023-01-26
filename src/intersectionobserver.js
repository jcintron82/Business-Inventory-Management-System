const observedObjectOne = document.querySelector('#parallax-break');
const observedObjectTwo = document.querySelector('.parallax-break-div');
const actionObject = document.querySelector('#break-banner');
const actionObjectTwo = document.querySelector('#parallax-break-top');
// const speed = 300;

const observerOptions ={ 
    root:null,
    threshold: .5, 
    // rootMargin:
}

 const objectOne = () => {
    actionObject.classList.toggle('break-banner');
    
}

const objectTwo = () => {
    actionObjectTwo.classList.toggle('break-banner');
    
}

//Intersection observer to see when observedObject is in view
const observer = new IntersectionObserver((entries, observer ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
        console.log(entry.target)
        objectOne()
        observer.unobserve(observedObjectOne);
        }    
    })
   }
 , observerOptions)

 const observer2 = new IntersectionObserver((entries, observer ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
        console.log(entry.target)
        objectTwo()
        observer.unobserve(observedObjectTwo);
        }    
    })
   }
 , observerOptions)

//Call the observe function on the observed object
observer.observe(observedObjectOne);
observer2.observe(observedObjectTwo)
 