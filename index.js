var numberofbuttons= document.querySelectorAll(".drum").length;

for(var i=0; i< numberofbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttoninnerHTML= this.innerHTML;

        playsound(buttoninnerHTML);

        addanimation(buttoninnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    playsound(event.key);

    addanimation(event.key);
});

function playsound(key){

    switch(key){
        case "w":
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            break;

            case "a":
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

            case "s":
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

            case "d":
            var kick= new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

            case "j":
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

            case "k":
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
            break;

            case "l":
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

}
}


function addanimation(currentkey){
    var animation= document.querySelector("." + currentkey);

    animation.classList.add("pressed");

    setTimeout(function(){
        animation.classList.remove("pressed");
    },1000);
}



