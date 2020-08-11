
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
    
    Ground = new Ground(400,680,800,60)
    paper = new paper(200,400,25)
    trash1 = new trash(700,120,100,30,PI/8);
    trash1.velocityX = 0;
    trash1.velocityY = 0;
    trash2 = new trash(600,120,30,180,PI);
    trash2.velocityX = 0;
    trash2.velocityY = 0;
    trash3 = new trash(500,120,100,30,PI);
    trash3.velocityX = 0;
    trash3.velocityY = 0;
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Ground.display();
  paper.display();
  trash1.display();
  trash2.display();
  trash3.display();
  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-80});

  }
}

