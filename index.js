
let color = document.querySelector('.color');


window.addEventListener('scroll', function(){
    let x = this.scrollX;
    let y  = this.scrollY;

    if (y > 0) {
        color.style.backgroundColor  = 'red';

        

        if (y >100) {
            color.style.backgroundColor  = 'green';
        } 

        if (y > 200) {
            color.style.backgroundColor  = 'blue';
        } 

        if (y > 300) {
            color.style.backgroundColor  = 'aqua';
        } 

        if (y > 400) {
            color.style.backgroundColor  = 'blueviolet';
        } 

        

    } else {
        color.style.backgroundColor  = 'transparent';
    }

  
})


let navbar = document.querySelector('.navbar')
window.addEventListener('scroll', function(){
    let x = this.scrollX;
    let y  = this.scrollY;
    if (y > 50) {
        navbar.style.backgroundColor  = 'black';
    } 
    if (y < 50) {
        navbar.style.backgroundColor  = 'rgba(138, 105, 174, 0.976) ';
    }
})

let ind1= document.querySelector('.ind1')
window.addEventListener('scroll', function(){
    let x = this.scrollX;
    let y  = this.scrollY;
    if (y > 0) {
        ind1.style.backgroundColor  = 'red';
    }
    if (y > 100) {
        ind1.style.backgroundColor  = 'transparent';
    }
   
    if (y < 5) {
        ind1.style.backgroundColor  = 'transparent';
    }
    
})


let ind2= document.querySelector('.ind2')
window.addEventListener('scroll', function(){
    let x = this.scrollX;
    let y  = this.scrollY;
    if (y > 100) {
        ind2.style.backgroundColor  = 'green';
    }
    if (y > 200) {
        ind2.style.backgroundColor  = 'transparent';
    }

    if (y < 100) {
        ind2.style.backgroundColor  = 'transparent';
    }
    
})


let ind3= document.querySelector('.ind3')
window.addEventListener('scroll', function(){
    let x = this.scrollX;
    let y  = this.scrollY;
    if (y > 200) {
        ind3.style.backgroundColor  = 'blue';
    }
    if (y > 300) {
        ind3.style.backgroundColor  = 'transparent';
    }
    if (y < 200) {
        ind3.style.backgroundColor  = 'transparent';
    }
})


let ind4= document.querySelector('.ind4')
window.addEventListener('scroll', function(){
    let x = this.scrollX;
    let y  = this.scrollY;
    if (y > 300) {
        ind4.style.backgroundColor  = 'aqua';
    }
    if (y > 400) {
        ind4.style.backgroundColor  = 'transparent';
    }

    if (y < 300) {
        ind4.style.backgroundColor  = 'transparent';
    }
    
})

let ind5= document.querySelector('.ind5')
window.addEventListener('scroll', function(){
    let x = this.scrollX;
    let y  = this.scrollY;
    if (y > 400) {
        ind5.style.backgroundColor  = 'blueviolet';
    }
    if (y < 400) {
        ind5.style.backgroundColor  = 'transparent';
    }
    
})
