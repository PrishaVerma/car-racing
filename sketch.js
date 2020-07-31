var database,playerCount;
var player,form,game;
var allPlayers;
var gameState=0;
var car1,car2,car3,car4;
var cars;
var car1_image,car2_image,car3_image,car4_image;
var track_image,ground_image;

function preload(){
car1_image= loadImage("images/car1.png");
car2_image=loadImage("images/car2.png");
car3_image=loadImage("images/car3.png");
car4_image=loadImage("images/car4.png")
track_image=loadImage("images/track.jpg");
ground_image=loadImage("images/track.png");

}
function setup(){
  database = firebase.database();
 // console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  game=new Game();
  game.getState();
  console.log(gameState);
  game.start();
  

  
}

function draw(){
  background("white");
  if(playerCount===4){
  game.updateState(1); 
  }
  if (gameState===1){
    game.play();
  }
  if(gameState===2){
    game.updateState(2);
    game.end();
  }
    
  
}

