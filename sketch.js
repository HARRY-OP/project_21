var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
  music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(580,520);

    block1 = createSprite(75,500,140,30);
    block1.shapeColor = "blue";

    block2 = createSprite(510,500,140,30);
    block2.shapeColor = "orange";

  block3 = createSprite(220,500,140,30);
    block3.shapeColor = "red";
  
  block4 = createSprite(365,500,140,30);
    block4.shapeColor = "green";
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,550),100, 40,40);
    ball.shapeColor = "white";
    //write code to add velocityX and velocityY
   ball.velocityX=23;
   ball.velocityY=14;
  
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) ){
        ball.shapeColor = "blue";
        music.play();
    }
  if(block3.isTouching(ball) ){
        ball.shapeColor = "red";
    }
  if(block4.isTouching(ball) ){
        ball.shapeColor = "green";
    }
  



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocity=0;
            music.play=false;

    }

    
    drawSprites();
}
