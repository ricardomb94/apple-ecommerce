//Slideshow
const slideshowDivs = ()=>{
    for(let i = 1; i <= 5; i++){
        const div = document.createElement('div');
        
        div.style.backgroundImage = `url(../images/slideshow/section-1-bg-${i}.jpg)`;
         
        //When i === 0, it means this is the firts iteration and the first div is created. It's the moment to asign to it a class change.
        i === 1 && div.classList.add('change');

        //Make the new create element visible in the DOM
        document.querySelector('.slideshow').appendChild(div);
    }
}
slideshowDivs();

//Let select all the div elts
const divs = document.querySelectorAll('.slideshow div')

//Counter
let a = 1

const slideshow = ()=>{
    setInterval(()=>{
        //Let's increment the counter one by one
        a++

        //Select the first div elt with the class .slideshow && change
       const div = document.querySelector('.slideshow .change');

        //Remove the class change from the first div
         div.classList.remove('change');

         if(a < divs.length){
            div.nextElementSibling.classList.add('change');
            }else{
                divs[0].classList.add('change');
                a = 1;
            }

        //Move the class change to the next div elmt using the property nextElementSibling
        div.nextElementSibling.classList.add('change')
    }, 2000);
}
slideshow();
//End of Slideshow