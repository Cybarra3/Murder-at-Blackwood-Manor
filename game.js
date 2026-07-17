let currentScene="intro";

let currentRoom=null;



window.onload=function(){


loadInventory();



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

clues:[]


};



saveGame(save);



inventory=[];

clues=[];



startGame();


}





function continueGame(){


let save=
loadGame();



if(save){


currentScene=
save.scene;



inventory=
save.inventory || [];



clues=
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





function loadScene(id){



let scene=
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






/* =========================
      DIALOGUE SYSTEM
========================= */


let currentDialogue=[];

let dialogueIndex=0;





function startDialogue(id){


currentDialogue=
dialogues[id];



dialogueIndex=0;



showDialogue();



}





function showDialogue(){


let line=
currentDialogue[dialogueIndex];



document
.getElementById("dialogueBox")
.classList.remove("hidden");



let character =
document.getElementById("characterImage");


character.src =
line.image;


character.onerror=function(){

console.log(
"Missing image:",
line.image
);


character.src =
"assets/characters/missing.jpg";

};



document
.getElementById("characterName")
.innerText=
line.speaker;



document
.getElementById("dialogueText")
.innerText=
line.text;




let choices=
document.getElementById("choices");



choices.innerHTML="";




line.choices.forEach(choice=>{


let button=
document.createElement("button");



button.className=
"choiceButton";



button.innerText=
choice.text;



button.onclick=function(){



if(choice.next===null){


endDialogue();


}

else{


dialogueIndex=
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







/* =========================
      MANSION SYSTEM
========================= */



function loadMansion(){



let container=
document.getElementById("roomButtons");



container.innerHTML="";



for(let id in rooms){



let room=
rooms[id];



let button=
document.createElement("button");



button.className=
"roomButton";




if(room.locked){



button.innerText=
"🔒 "+room.name;



button.classList.add("locked");



}

else{



button.innerText=
"🚪 "+room.name;



button.onclick=function(){



enterRoom(id);



};



}



container.appendChild(button);



}




}








function enterRoom(id){



let room=
rooms[id];



currentRoom=id;



document
.getElementById("sceneTitle")
.innerText=
room.name;



document
.getElementById("sceneText")
.innerText=
room.description;



}







/* =========================
      INVESTIGATION
========================= */


function searchRoom(){



if(!currentRoom){


alert(
"Choose a room first."
);


return;


}



let room=
rooms[currentRoom];



if(!room.evidence){


alert(
"You search carefully but find nothing."
);



return;


}



addEvidence(
room.evidence.item
);



addClue(
room.evidence.clue
);



room.evidence=null;



}
function openEvidence(){


document
.getElementById("gameScreen")
.classList.add("hidden");


document
.getElementById("evidenceScreen")
.classList.remove("hidden");



let list =
document.getElementById("evidenceList");


list.innerHTML="";



inventory.forEach(item=>{


let evidence =
evidenceDatabase[item];


let card =
document.createElement("div");



card.className="evidenceCard";



card.innerHTML=

`

<h3>
${item}
</h3>

<p>
${evidence.description}
</p>

<strong>
${evidence.importance}
</strong>

`;



list.appendChild(card);



});


}






function openNotebook(){


document
.getElementById("gameScreen")
.classList.add("hidden");



document
.getElementById("notebookScreen")
.classList.remove("hidden");



let list =
document.getElementById("clueList");



list.innerHTML="";



clues.forEach(clue=>{


let p =
document.createElement("p");


p.innerText=
"• "+clue;



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
