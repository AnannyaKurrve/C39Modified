var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;
var moon,moonImage;
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload(){
    music = loadSound("music.mp3");
    moonImage=loadImage("Pictures/Moon.png");
}


function setup(){
    canvas = createCanvas(1000,1000);
   // rectMode(CENTER);
   // engine = Engine.create();
	//world = engine.world;
 // Engine.run(engine);

    //score

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb("gold");

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(255,128,0);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(153,0,76);

    block4 = createSprite(740,580,350,30);
    block4.shapeColor = rgb(0,100,0);

   // block5=createSprite(1000,)

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
   //ball.velocityX = 2;
   //ball.velocityY = 2;

   moon=createSprite(100,400);
   moon.addImage(moonImage);
   moon.scale=0.1;
   //moon.restitution=0.5;
  // moon.translate(random);
   moon.velocityX=5;
   moon.velocityY=5;

    score = 0;
}


function draw() {
   // background(rgb(169,169,169));

    
     background("blue");
     edges=createEdgeSprites();
    ball.bounceOff(edges);
moon.bounceOff(edges);

    textSize(20);
    fill(255);
    text("Score: "+score, 500,40);
   // background("blue");

    if(keyDown(RIGHT_ARROW)){
      ball.velocityX=10;
      ball.x=ball.x+5;
      //ball.velocityX=2;
//value=5;
    }
    else if(keyDown(LEFT_ARROW)){
      //value=-5;
      //keyCode===LEFT_ARROW
      ball.velocityX=2;
      ball.x=ball.x-5;
      //ball.velocityX=2;
    }

    else if(keyDown(UP_ARROW)){
      ball.velocityY=2;
      ball.y=ball.y-5;
    }

    else if(keyDown(DOWN_ARROW)){
      ball.velocityY=10;
      ball.y=ball.y+5;
    }

    else{
      ball.velocityX=0;
      ball.velocityY=0;
    }

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
        //score=score+1;
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = rgb(255,128,0);
        //ball.velocityX = 10;
       // ball.velocityY = 10;
        music.play();
       // score=score+4;
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(153,0,76);
        music.play();
        //score=score+5;
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0);
        music.play();
        //score=score+2;
    }


  
    if(block1.isTouching(moon) && moon.bounceOff(block1)){
      //ball.shapeColor = rgb(0,0,255);
      music.play();
      //score=score+1;
  }

  if(block2.isTouching(moon)&& moon.bounceOff(block2)){
      //ball.shapeColor = rgb(255,128,0);
      //ball.velocityX = 10;
     // ball.velocityY = 10;
      music.play();
      //score=score+4;
  }

  if(block3.isTouching(moon) && moon.bounceOff(block3)){
     // ball.shapeColor = rgb(153,0,76);
      music.play();
      //score=score+5;
  }

  if(block4.isTouching(moon) && moon.bounceOff(block4)){
     // ball.shapeColor = rgb(0,100,0);
      music.play();
      //score=score+2;
  }

  if(ball.isTouching(moon) && moon.bounceOff(ball)){
     ball.shapeColor = ("golden");
     music.play();
     score=score+1;
 }



    
    drawSprites();


      
          rectMode(CENTER);
         
          ball.x= ball.position.x 
          ball.y= ball.position.y
         
         moon.x=moon.position.x;
         moon.y=moon.position.y;
       
     }
