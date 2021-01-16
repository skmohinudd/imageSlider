const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.preBtn');
const container = document.querySelector('.images');

let count = 0;

nextBtn.addEventListener('click',nextSlide);
preBtn.addEventListener('click',preSlide);

function nextSlide(){
    count++;
    if(count === 4){
        count = -1
    }else{
        container.style.backgroundImage =`url(pic-${count}.jpg)`
    }
    
    
}

function preSlide(){
    count--;
    if(count === 0){
        count = 4
    }else{
        container.style.backgroundImage =`url(pic-${count}.jpg)`
    }
  
}