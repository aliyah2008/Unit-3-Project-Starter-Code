
let title=document.querySelector(".story-opening");
let digButton = document.querySelector(".option-dig");let swimButton = document.querySelector(".option-swim");
let Digdiv = document.querySelector (".option-one-screen");
let swimDiv= document.querySelector (".option-two-screen");
let Golddiv = document.querySelector (".option-one-end");
let Overdiv = document.querySelector (".option-two-end");
let tunnel = document.querySelector (".option-tunnel");
let city = document.querySelector (".option-city");
digButton.onclick= function(){
  Digdiv.style.display="block";
    title.style.display="none";
};

swimButton.onclick= function(){
  swimDiv.style.display="block";
    title.style.display="none";
};

tunnel.onclick=function(){
 Golddiv.style.display="block";
  Digdiv.style.display="none";
};

city.onclick= function(){
  Overdiv.style.display="block";
    title.style.display="none";
};

