
for (let i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", onClick);
    function onClick() {
        let presskey = this.innerHTML;
        buttonAnimation(presskey);
        makeSound(presskey);
    }
}

document.addEventListener("keypress", function (event) {
    let keypress = event.key;
       buttonAnimation(keypress);
      makeSound(keypress);
       
});

  function makeSound(key){
    switch (key) {
        case "a":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "s":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "d":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "f":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;
        default:
            console.log("Plz enter the correct key");

    }

  }
function buttonAnimation(currentKey){

    let activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100);
}
