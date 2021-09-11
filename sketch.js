var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var back_Img,gta,gta1;
var question, contestant, quiz;
function preload(){
back_Img = loadImage("back.jpg");
gta = loadImage("gta1.png");
}

function setup(){
  canvas = createCanvas(1200,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  gta1 = createSprite(130,400,40,40);
gta1.addImage(gta);
gta1.scale=0.5;
}


function draw(){
  background(back_Img);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  
  drawSprites();
}
