const SAVE_KEY="blackwood_save";


function saveGame(data){

localStorage.setItem(
SAVE_KEY,
JSON.stringify(data)
);

}



function loadGame(){

let data =
localStorage.getItem(SAVE_KEY);


return data ? JSON.parse(data) : null;

}



function hasSave(){

return localStorage.getItem(SAVE_KEY)!==null;

}
