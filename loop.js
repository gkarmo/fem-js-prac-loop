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

for (i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i].name + " favorite color is " + game.suspects[i].color)
}