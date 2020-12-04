
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var text
function preload()
{
	
	}

function setup() {
	createCanvas(1200,300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,290,1200,20)

	box1 = new Dustbin(800,275,200,20);
	box2 = new Dustbin(700,235,20,100);
	box3 = new Dustbin(900,235,20,100);

	paperball = new Paper(200,275,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display()
  paperball.display();
  keypressed();
  drawSprites();
 
}

function keypressed(){
	if(keyWentDown(UP_ARROW)){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:25,y:-25});


}
}

