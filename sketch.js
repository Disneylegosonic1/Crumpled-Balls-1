
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

	paper = new Paper(100,200,20);
    ground = new Ground(750,690,1500,20)
    dustbin1 = new Dustbin (600,625,20,120)
    dustbin2 = new Dustbin (720, 625, 20, 120)
    dustbin3 = new Dustbin (660, 675, 120, 20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	}
}


