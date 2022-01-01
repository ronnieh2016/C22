const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    restitution: 0.5
  }
  ball = Bodies.circle(400,100,40,options);
  World.add(world,ball);
var options = {
  isStatic: true
}
ground = Bodies.rectangle(400,800,800,40,options);
World.add(world,ground);


}

function draw() {
  background("pink");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,40,40);
  drawSprites();
}