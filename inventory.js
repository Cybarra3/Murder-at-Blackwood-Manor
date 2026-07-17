let inventory=[];

let clues=[];



function addEvidence(item){


if(!inventory.includes(item)){


inventory.push(item);


addClue(
"Found evidence: "+item
);


saveInventory();


showFoundMessage(item);


}


}



function addClue(clue){


if(!clues.includes(clue)){


clues.push(clue);


saveInventory();


}


}




function saveInventory(){


let save=loadGame();


if(save){


save.inventory=inventory;

save.clues=clues;

saveGame(save);


}


}




function loadInventory(){


let save=loadGame();


if(save){


inventory=save.inventory||[];

clues=save.clues||[];

}


}



function showFoundMessage(item){


let e=evidenceDatabase[item];


alert(

"🔎 Evidence Found\n\n"+

item+

"\n\n"+

e.description

);


}
