const SAVE_KEY =
"blackwood_save";


function saveGame(data){

localStorage.setItem(
SAVE_KEY,
JSON.stringify(data)
);

}



function loadGame(){

let data =
localStorage.getItem(SAVE_KEY);


if(!data){

return null;

}


return JSON.parse(data);

}



function hasSave(){

return localStorage.getItem(SAVE_KEY)!==null;

}
