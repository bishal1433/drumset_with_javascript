var x=document.querySelectorAll(".drum");

for(var i=0;i<x.length;i++)
{
  x[i].addEventListener("click",function(){
    var y=this.innerHTML;
    makeSound(y);
    btnAnime(y);
  });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  btnAnime(event.key);
});

//a universal function to create sound...
function makeSound(key)
{
  switch(key)
  {
    case "w":
    var tom1= new Audio('tom-1.mp3');
    tom1.play();
    break;
    case "a":
    var tom2= new Audio('tom-2.mp3');
    tom2.play();
    break;
    case "s":
    var tom3= new Audio('tom-3.mp3');
    tom3.play();
    break;
    case "d":
    var tom4= new Audio('tom-4.mp3');
    tom4.play();
    break;
    case "j":
    var snare= new Audio('snare.mp3');
    snare.play();
    break;
    case "k":
    var crash= new Audio('crash.mp3');
   crash.play();
    break;
    case "l":
    var kick= new Audio('kick-bass.mp3');
    kick.play();
    break;
    default: console.log(y);
  }
}

function btnAnime(key1)
{
  var activebtn=document.querySelector("."+key1);
  activebtn.classList.add("pressed");
  setTimeout(function(){
    activebtn.classList.remove("pressed");
  },100);
}
// var audio= new Audio('sounds/tom-1.mp3');
// audio.play();
