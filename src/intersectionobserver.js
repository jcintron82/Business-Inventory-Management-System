const observedObject = document.querySelector('#parallax-break');
const actionObject = document.querySelector('#break-banner');
// const speed = 300;

const observerOptions ={ 
    root:null,
    threshold: .5, 
    // rootMargin:
}

 const releventFunc = () => {
    //Write logic for what will happen to actionObject when observedObject is observed...
    actionObject.classList.toggle('break-banner')
}

//Intersection observer to see when observedObject is in view
const observer = new IntersectionObserver((entries, observer ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
        console.log(entry.target)
        releventFunc()
        }    
    })
   }
 , observerOptions)

//Call the observe function on the observed object
observer.observe(observedObject)
 