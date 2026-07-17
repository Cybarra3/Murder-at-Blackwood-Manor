const rooms={


foyer:{

name:"Grand Foyer",

description:
"The entrance hall of Blackwood Manor. Portraits watch silently.",

locked:false,

evidence:null

},



library:{

name:"Library",

description:
"Thousands of books line the walls. Something is hidden here.",

locked:false,

evidence:{

item:"Library Key",

clue:
"The library contains a hidden message."

}

},



study:{


name:"Victor's Study",


description:
"The door is locked. A strange symbol is carved into the wood.",


locked:true,


requires:
"Library Key",


evidence:{

item:"Bloodstained Document",

clue:
"Victor planned to change his will."

}


},


kitchen:{

name:"Kitchen",

description:
"The kitchen looks recently cleaned.",

locked:false,

evidence:{

item:"Strange Bottle",

clue:
"Someone altered Victor's medication."

}

},



garden:{

name:"Garden",

description:
"Fresh footprints disappear into the woods.",

locked:false,

evidence:{

item:"Footprints",

clue:
"Someone entered the mansion during the storm."

}

}


};
