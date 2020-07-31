class Player {
    constructor(){
this.name=null;
this.distance=0;
this.index=null;
this.rank=null;

    }
    getCount(){
        var pcRef= database.ref('playerCount');
        pcRef.on('value',function(data){
            playerCount= data.val();
        })

    }
    updateCount(count){
        database.ref("/").update({
        playerCount:count
        })

    }

    update(){
        var playerRef="players/player"+ this.index;
        database.ref(playerRef).set(
    {
        name: this.name,
        distance:this.distance
    }
)
    }
    static getPlayerInfo(){
        var infoRef=database.ref('players');
        infoRef.on("value",(data)=>{
        allPlayers=data.val();

        });
    }

    getCarsAtEnd(){
        database.ref("carsAtEnd").on("value",(data)=>{
        this.rank=data.val();

        });


    }
    static updateCarsAtEnd(rank){
database.ref("/").update({
    carsAtEnd:rank
})
    }
}