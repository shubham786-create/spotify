let play=document.getElementsByClassName("play");
  play[0].style .cursor="pointer";
let body=document.querySelector("body");
let footer=document.querySelector("footer");
let audio =document.querySelector("audio");
let songSection=document.querySelector(".song");
let playBtn="off";
play[0].addEventListener("click", function(){
    songSection.style.visibility="visible";

    if(playBtn==="off"){
     audio.play();
     playBtn="on"
    }
    else{
        audio .pause();
        playBtn="off";
    }
   
});