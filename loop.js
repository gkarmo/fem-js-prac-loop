const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}


// gives user chance to choose who they think is guilty like a line up 
function loopy() {
   for (i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i].name + " favorite color is " + game.suspects[i].color)
    let verdict = prompt("Do you think " + game.suspects[i].name + " is guilty. Yes or No.");
    if (verdict == "yes") {
        game.suspects[i].verdict = "Guilty";
        console.log(game.suspects[i].name + " YOU DID IT!!");
    }
    else {
        game.suspects[i].verdict = "Innocent";
    }
} 
}

loopy();


// for ( let key in obj) { obj[] } to loop using object
// this loop is good for if you are looking for a specific guilty person like bounty hunting
function gameLoop() {
    for (i = 0; i < game.suspects.length; i++) {
        //example of looping throught object using object
        for (key in game.suspects[i]) {
            //got to use brackets twice when calling key
            if (game.suspects[i][key] === "Miss Scarlet") {
                console.log("GOT YOU MISS SNEAKY SCARLET");
            }
            else {
                console.log("WE WILL FIND YOU SOOOON SCAR SCAR")
            }
        }
    }
}

gameLoop();