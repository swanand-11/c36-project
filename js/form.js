class Form {
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("welcome to street racer")
        title.position(250,50)
        var greeting = createElement("h3")
        var input = createInput("name")
        input.position(250,100)
        var button = createButton("play")
        button.position(250,150)
        button.mousePress(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount = playerCount + 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hell0 !"+ name)
            greeting.position(250,250)

        })
    }
}