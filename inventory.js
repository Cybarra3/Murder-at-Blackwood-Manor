let inventory = [];

let clues = [];



function addEvidence(item){


if(!inventory.includes(item)){


inventory.push(item);


saveInventory();


alert(
"Evidence Found:\n\n" + item
);


}


}




function addClue(clue){


if(!clues.includes(clue)){


clues.push(clue);


saveInventory();


}


}




function saveInventory(){


let save =
loadGame();



if(save){


save.inventory =
inventory;


save.clues =
clues;


saveGame(save);


}


}





function loadInventory(){


let save =
loadGame();



if(save){


inventory =
save.inventory || [];


clues =
save.clues || [];


}


}




function showInventory(){


let text="Evidence:\n\n";


if(inventory.length===0){


text += "Nothing found yet.";


}
else{


inventory.forEach(item=>{


text += "• "+item+"\n";


});


}



alert(text);


}





function showNotebook(){


let text="Detective Notebook:\n\n";


if(clues.length===0){


text += "No clues recorded.";


}
else{


clues.forEach(clue=>{


text += "• "+clue+"\n";


});


}



alert(text);


}
