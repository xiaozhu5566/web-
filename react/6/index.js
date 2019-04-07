var items = document.getElementsByClassName('item');
var index = 0;  //记录哪张图片呈现
var btnLeft = document.getElementsByClassName('left')[0];
var btnRight = document.getElementsByClassName('right')[0];

var goNext = function(){
    if(index == items.length - 1){
        index = 0;
    }else{
        index ++;
    }
    play();
}

var goPrev = function(){
    if(index == 0){
        index = items.length - 1;
    }else{
        index --;
    }
    play();
}

var play = function(){
    for(var i = 0; i < items.length; i ++){
        items[i].classList.remove('active');
    }
    items[index].classList.add('active');
}

btnLeft.addEventListener('click',function(){
    goPrev()
})
btnRight.addEventListener('click',() =>{
    goNext();
})
