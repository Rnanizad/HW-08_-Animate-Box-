$(document).ready(init);

function init(){

    
function jump(){
    
    var x = Math.floor(Math.random()*450);
    var y = Math.floor(Math.random()*450);

    $('.small').animate({
        left : x,
        top : y
    }, 2000);

    setInterval(jump , 3000)

}jump();

}