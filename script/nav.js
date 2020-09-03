var burger = document.querySelector('.burger')
var burdiv = document.querySelectorAll('.burger div')
var catlink = document.querySelector('#catagory')
var switch1 = true
var switch2 = true

burger.addEventListener('click', cato)
function cato(){
    if(switch1){
        catlink.style = 'left:0px'
        burdiv[0].style = 'transform: rotate(45deg) translateX(15px);transition:0.5s'
        burdiv[1].style = 'opacity:0;transition:0.5s'
        burdiv[2].style = 'transform: rotate(-45deg) translateX(15px);transition:0.5s'
        switch1 = false;
    } else{
        catlink.style = 'left:-300px'
        burdiv[0].style = 'transform: rotate(0deg) translateX(0px);transition:0.5s'
        burdiv[1].style = 'opacity:1;transition:0.5s'
        burdiv[2].style = 'transform: rotate(0deg) translateX(0px);transition:0.5s'
        switch1 = true;
    }
}