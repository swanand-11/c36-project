class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef = database.ref("playercount")
        playerCountRef.on("value",function(data){
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            playercount:count
        })
    }
    update(name){
        var playerIndex = "player"+playerCount
        database.ref(playerIndex).set({
            name:name
        })
    }
}