var database, player, game, form ;
var position;
var gameState=0;
var playerCount=0;

function setup(){
  database = firebase.database();
createCanvas(400,400);
game=new Game();
game.getState();
game.start();
}

function draw(){
  background("white");
  
   
  
}


