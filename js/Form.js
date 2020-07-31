class Form{
    constructor(){
this.input=createInput("name");
this.button=createButton("Play");
this.greeting=createElement('h3');
this.reset=createButton("RESET");


    }
    display(){
        var title=createElement('h2');
        title.html("car racing game");
        title.position(displayWidth/2-50,0);
        
       this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.reset.position(displayWidth-100,20);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(()=>{
           
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
this.reset.mousePressed(()=>{
player.updateCount(0);
game.updateState(0);
})

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}