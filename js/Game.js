class Game{
    constructor(){

    }
   
    updateState(state){
        database.ref("/").update({
            gameState:state
        })

    }
    getState(){
        var gsRef= database.ref('gameState');
        gsRef.on('value',function(data){
            gameState= data.val();
        })
//console.log(gameState);
    }
   async start(){
     if(gameState===0){
        player=new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
        form=new Form();
        form.display();
        //console.log("hi");

        
        car1=createSprite(100,200);
        car2=createSprite(100,200);
        car3=createSprite(100,200);
        car4=createSprite(100,200);
        cars=[car1,car2,car3,car4]

        car1.addImage(car1_image);
        car2.addImage(car2_image);
        car3.addImage(car3_image);
        car4.addImage(car4_image);

     }
     }
    play(){
        form.hide();
        textSize(30);

        text("game start",120,100);
        
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers!==undefined){
background(ground_image)
            image(track_image,0,-displayHeight*4,displayWidth,displayHeight*5);
        
            var x=175;
            var y;
            var index=0;
            for(var p in allPlayers ){
                x=x+200;
                y=displayHeight-allPlayers[p].distance;
                cars[index].x=x;
                cars[index].y=y;
                index=index+1;
                if(index===player.index){
                    fill("red");
                    stroke(10);
                    ellipse(x,y,60,60);
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }
            }
    // console.log(allPlayers);
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null&& player.distance<=3680){
            player.distance=player.distance+10;
            player.update();
            console.log(player.distance);
        }
        if(player.distance===3680){
            gameState=2;
            player.rank=player.rank+1;
            Player.updateCarsAtEnd(player.rank);
        }
        drawSprites();

    }
    end(){
        console.log("game ended");
        console.log(player.rank);
    }

    }

