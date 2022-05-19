
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world
var engine

var block1
var block2
var block3
var solo

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	solo = Bodies.rectangle(400, 700, 800, 5,{isStatic: true});
	World.add(world,solo);
	
	block1 = Bodies.circle(220, 10, 50, block1_options);
	World.add(world,block1)
    
	block2 = Bodies.rectangle(110, 50, 80, 80, block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350, 50, 100, 50, block3_options);
	World.add(world,block3);

	var block1_options={
	restitution:0.5, 
	friction:0.02,
	frictionAir:0
	}

	var block2_options={
		restitution:0.7, 
		friction:0.01,
		frictionAir:0.1
	}

	var block3_options={
		restitution:0.01, 
		friction:1,
		frictionAir:0.3
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  
  rect(solo.position.x, solo.position.y, 800, 5);
  fill("blue");
  ellipse(block1.position.x, block1.position.y,50);
  rect(block2.position.x, block2.position.y, 80, 80);
  rect(block3.position.x, block3.position.y, 100, 50);
 
}



