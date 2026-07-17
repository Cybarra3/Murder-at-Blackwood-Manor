let currentScene="intro";


window.onload=function(){


if(!hasSave()){

document
.getElementById("continueBtn")
.style.display="none";

}


};



function newGame(){


let save={

scene:"intro",

inventory:[],

clues:[],

suspectProgress:{}

};


saveGame(save);


startGame();


}



function continueGame(){


let save =
loadGame();


if(save){

currentScene=
save.scene;


startGame();


}

}



function startGame(){


document
.getElementById("titleScreen")
.classList.add("hidden");


document
.getElementById("gameScreen")
.classList.remove("hidden");


loadScene(currentScene);


}




function loadScene(id){


let scene =
scenes[id];


document
.getElementById("sceneTitle")
.innerText=
scene.title;


document
.getElementById("sceneText")
.innerText=
scene.text;


}



function returnMenu(){


document
.getElementById("gameScreen")
.classList.add("hidden");


document
.getElementById("settings")
.classList.add("hidden");


document
.getElementById("titleScreen")
.classList.remove("hidden");


}



function openSettings(){


document
.getElementById("titleScreen")
.classList.add("hidden");


document
.getElementById("settings")
.classList.remove("hidden");


}



function toggleMusic(){

alert(
"Music system coming soon."
);

}
function loadMansion(){


let container =
document.getElementById("roomButtons");


container.innerHTML="";



for(let id in rooms){


let room =
rooms[id];



let button =
document.createElement("button");



button.className =
"roomButton";



if(room.locked){

button.classList.add("locked");

button.innerText =
"🔒 " + room.name;


}
else{


button.innerText =
"🚪 " + room.name;



button.onclick=function(){

enterRoom(id);

};


}



container.appendChild(button);



}


}



function enterRoom(id){


let room =
rooms[id];



document
.getElementById("sceneTitle")
.innerText =
room.name;



document
.getElementById("sceneText")
.innerText =
room.description;



}
