const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world, ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ground_options ={
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,400,20, ground_options);
  World.add(world,ground);

  //console.log(ground);
  //console.log(object.position.x);
  //console.log(object.position.y);

  var ball_options ={
    restitution: 1.0
  }
  ball = Bodies.circle(200,10,20, ball_options);
  World.add(world,ball);
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}