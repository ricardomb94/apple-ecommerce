//Cube
x = 0;
let y = 0;
let z = 0;
let bool = true;
let interval; 

const cube = document.querySelector('.cube');

document.querySelector('.top-x-control').addEventListener('click', ()=>{
    cube.style.transform = `rotateX(${x +=20 }deg)rotateY(${y}deg)rotateZ(${z}deg)`;
});

document.querySelector('.bottom-x-control').addEventListener('click', ()=>{
    cube.style.transform = `rotateX(${x -=20 }deg)rotateY(${y}deg)rotateZ(${z}deg)`;
});

document.querySelector('.left-y-control').addEventListener('click', ()=>{
    cube.style.transform = `rotateX(${x}deg)rotateY(${y -=20 }deg)rotateZ(${z}deg)`;
});



document.querySelector('.right-y-control').addEventListener('click', ()=>{
    cube.style.transform = `rotateX(${x}deg)rotateY(${y +=20 }deg)rotateZ(${z}deg)`;
});
document.querySelector('.top-z-control').addEventListener('click', ()=>{
    cube.style.transform = `rotateX(${x}deg)rotateY(${y}deg)rotateZ(${z -= 20}deg)`;
});

document.querySelector('.bottom-z-control').addEventListener('click', ()=>{
    cube.style.transform = `rotateX(${x}deg)rotateY(${y +=20 }deg)rotateZ(${z}deg)`;
});

const playPause = () =>{
    if(bool){
        interval = setInterval(() =>{
            cube.style.transform= `rotateX(${x}deg)rotateY(${y++}deg)rotateZ(${z}deg`;
        }, 100)
    }else{
        clearInterval(interval);
    }
}
playPause();

document.querySelector('.controls').addEventListener('mouseover', ()=>{
    bool = false;
    playPause();
});
//End of Cube

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

//section 3
const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop
        + section3Content.offsetHeight/2);
    {
        section3Content.classList.add('change');    }
})
//End of section 3
