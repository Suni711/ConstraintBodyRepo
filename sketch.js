const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
let con;
var ball2;
let con2;


function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ballOptions=
  {
    restitution:0.5
  }

  ball= Bodies.circle(200,70,10,ballOptions);
  World.add(world,ball);

  con= Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1,
  })

World.add(world,con);


ball2=Bodies.circle(200,150,12,ballOptions);
World.add(world,ball2);

con2= Matter.Constraint.create({
  bodyA:ball,
  pointA:{x:0,y:0},
  bodyB:ball2,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1,
})

World.add(world,con2);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

ellipse(ball.position.x,ball.position.y,10);
ellipse(ball2.position.x,ball2.position.y,12);
push();
strokeWeight(2);

stroke("white");
fill("red");



line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);

pop();



keyPressed();

}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
  {
   Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
  else if (keyCode==LEFT_ARROW)
  {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0});
  }

}

