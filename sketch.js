
const MEngine = Matter.Engine;
const MWorld = Matter.World;
const MBodies = Matter.Bodies;
const MBody = Matter.Body;

var ground;
var dustbin;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = MEngine.create();
	world = engine.world;

	ball = new Paper(100,450,150);
	dustbin = new Dustbin();
  ground = new Ground(width/2, 670, width, 20);
  
 /////////// //console.log(ball.y);
 ///// ////c//onsole.log(dustbin.y);


	MEngine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ball.display();
  ground.display();
  dustbin.display();
}

function keyPressed(){
  console.log(" jump ball")
  if(keyCode ==  UP_ARROW){
    console.log("in up arrow")
    Matter.Body.applyForce(ball.body, ball.body.position, {x: 150, y: -150});
  }
}



