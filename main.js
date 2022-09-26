const crashAudio = new Audio('sounds/crash.mp3');
const kickAudio = new Audio('sounds/kick-bass.mp3');
const snareAudio = new Audio('sounds/snare.mp3');
const tom1Audio = new Audio('sounds/tom-1.mp3');
const tom2Audio = new Audio('sounds/tom-2.mp3');
const tom3Audio = new Audio('sounds/tom-3.mp3');
const tom4Audio = new Audio('sounds/tom-4.mp3');


document.onkeydown = function(e){
  const keyPress = e.key;
  const keyObject = document.getElementById(keyPress);

  if(keyObject != null)
  {
    keyObject.style.opacity = 0.5;

    switch(keyPress){

      case 'a':
        crashAudio.play();
        break;

      case 's':
        kickAudio.play();
        break;

      case 'g':
        tom1Audio.play();
        break;

      case 'h':
        tom2Audio.play();
        break;

      case 'j':
        tom3Audio.play();
        break;

      case 'k':
        tom4Audio.play();
        break;

      case 'l':
        snareAudio.play();
        break;
    }

    setTimeout(() => {
      document.getElementById(keyPress).style.opacity = 1;
     }, 200);
  }

}
