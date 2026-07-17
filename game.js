let currentScene = "intro";

let currentRoom = null;

let currentDialogue = [];

let dialogueIndex = 0;



window.onload = function(){


loadInventory();



if(!hasSave()){


document
.getElementById("continueBtn")
.style.display="none";


}


};





// =============================
// NEW GAME
// =============================


function newGame(){


let save = {


scene:"intro",

inventory:[],

clues:[]


};


saveGame(save);


inventory=[];

clues=[];


startGame();


}





function continueGame(){


let save =
loadGame();



if(save){


currentScene =
save.scene;



inventory =
save.inventory || [];



clues =
save.clues || [];



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



startDialogue("intro");


}






// =============================
// SCENES
// =============================


function loadScene(id){


let scene =
scenes[id];



if(!scene)
return;



document
.getElementById("sceneTitle")
.innerText =
scene.title;



document
.getElementById("sceneText")
.innerText =
scene.text;


}






// =============================
// MENU
// =============================


function returnMenu(){


document
.getElementById("gameScreen")
.classList.add("hidden");


document
.getElementById("evidenceScreen")
.classList.add("hidden");


document
.getElementById("notebookScreen")
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







// =============================
// DIALOGUE SYSTEM
// =============================


function startDialogue(id){


currentDialogue =
dialogues[id];


dialogueIndex=0;


showDialogue();


}





function showDialogue(){


let line =
currentDialogue[dialogueIndex];



if(!line){

endDialogue();

return;

}



let image =
document.getElementById(
"characterImage"
);



image.src =
line.image;



image.onerror=function(){


console.log(
"Missing image:",
line.image
);



image.src =
"assets/characters/missing.jpg";


};




document
.getElementById("characterName")
.innerText =
line.speaker;



document
.getElementById("dialogueText")
.innerText =
line.text;



document
.getElementById("dialogueBox")
.classList.remove("hidden");




let choices =
document.getElementById("choices");



choices.innerHTML="";



line.choices.forEach(choice=>{


let button =
document.createElement("button");



button.className =
"choiceButton";



button.innerText =
choice.text;



button.onclick=function(){


if(choice.next === null){


endDialogue();


}

else{


dialogueIndex =
choice.next;



showDialogue();


}



};



choices.appendChild(button);



});


}





function endDialogue(){


document
.getElementById("dialogueBox")
.classList.add("hidden");



loadMansion();


}









// =============================
// MANSION SYSTEM
// =============================


function loadMansion(){


let container =
document.getElementById(
"roomButtons"
);



container.innerHTML="";



for(let id in rooms){


let room =
rooms[id];



let button =
document.createElement("button");



button.className =
"roomButton";




if(room.locked){


button.innerText =
"🔒 " + room.name;



button.classList.add(
"locked"
);



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



currentRoom=id;



document
.getElementById("sceneTitle")
.innerText =
room.name;



document
.getElementById("sceneText")
.innerText =
room.description;


}









// =============================
// SEARCH SYSTEM
// =============================


function searchRoom(){



if(!currentRoom){


alert(
"Choose a room first."
);


return;


}



let room =
rooms[currentRoom];



if(!room.evidence){


alert(
"You search carefully but find nothing unusual."
);



return;


}




let found =
room.evidence;



addEvidence(
found.item
);



addClue(
found.clue
);



room.evidence=null;



}









// =============================
// EVIDENCE BOARD
// =============================


function openEvidence(){


document
.getElementById("gameScreen")
.classList.add("hidden");



document
.getElementById("evidenceScreen")
.classList.remove("hidden");



let list =
document.getElementById(
"evidenceList"
);



list.innerHTML="";



if(inventory.length===0){


list.innerHTML =
"<p>No evidence collected.</p>";

return;


}



inventory.forEach(item=>{


let data =
evidenceDatabase[item];



let card =
document.createElement("div");



card.className =
"evidenceCard";



card.innerHTML = `


<h3>
${item}
</h3>


<p>
${data.description}
</p>


<strong>
${data.importance}
</strong>


`;



list.appendChild(card);


});


}








// =============================
// NOTEBOOK
// =============================


function openNotebook(){


document
.getElementById("gameScreen")
.classList.add("hidden");



document
.getElementById("notebookScreen")
.classList.remove("hidden");



let list =
document.getElementById(
"clueList"
);



list.innerHTML="";



if(clues.length===0){


list.innerHTML =
"<p>No clues recorded.</p>";

return;


}



clues.forEach(clue=>{


let p =
document.createElement("p");



p.innerText =
"• " + clue;



list.appendChild(p);



});


}







function closeScreens(){


document
.getElementById("evidenceScreen")
.classList.add("hidden");


document
.getElementById("notebookScreen")
.classList.add("hidden");



document
.getElementById("gameScreen")
.classList.remove("hidden");


}
