let hi_part=document.getElementById('hi_part');
let my_photo=document.getElementById('my_photo');

if(document.documentElement.clientWidth > 1000){
    window.addEventListener('scroll', movement, false);
}

let movemeleft = 0;
let pxs = document.documentElement.offsetWidth / 100;

function movement(){    
    if(hi_part.getBoundingClientRect().y<0){
        movemeleft = 1;
    }
    
    //заголовок дошел до верха, сдвигаем вбок
    if(movemeleft == 1){
        hi_part.style.position = 'fixed';
        hi_part.style.marginTop = 1 + '%';
        
        
        if(my_photo.parentElement.getBoundingClientRect().x <= hi_part.getBoundingClientRect().x){
            let ml = document.documentElement.offsetWidth/2.75;
            if(ml > pageYOffset){
                hi_part.style.marginLeft = 2*pxs + (ml - pageYOffset) + 'px';
            }
            
            if(hi_part.getBoundingClientRect().x <= (my_photo.parentElement.getBoundingClientRect().x + pxs)){
                hi_part.style.marginLeft = my_photo.parentElement.getBoundingClientRect().x + 2*pxs + 'px';
            }
        }
        
        if(pageYOffset==0){
            hi_part.style.marginLeft = 35+'%';
        }
    }    
    
    //сдвиг фото вниз
    let photo_side = +my_photo.parentElement.offsetHeight/4;
    if(pageYOffset < photo_side){
        my_photo.style.position='absolute';
        my_photo.style.top = pageYOffset + 'px';
    }   
}
