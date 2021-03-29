var database;
var background_Img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var garbage    ;
var garbageGroup;
var garbage1_img, garbage2_img, garbage3_img, garbage4_img, garbage5_img;
var player1_img;
var player2_img;


function preload(){
  background_img = loadImage("background.png");
  player2_img = loadImage("non biodegradable.png");
  player1_img = loadImage("biodegradable.png");
  garbage1_img = loadImage("apple2.png");
  garbage2_img = loadImage("banana2.png");
  garbage3_img = loadImage("melon2.png");
  garbage4_img = loadImage("orange2.png");
  garbage5_img = loadImage("pineapple2.png");
  garbageGroup = new Group();
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}