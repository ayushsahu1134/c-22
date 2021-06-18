
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var object2;
var object3;
var object4;

function setup(){
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  object=Bodies.rectangle(100,50,50,50);
  World.add(world,object);
  console.log(object);
  console.log(object.position.x);
  object2=Bodies.circle(100,100,50,50);
  World.add(world,object2);
  object3=Bodies.circle(100,100,50,50);
  World.add(world,object3);
  object4=Bodies.rectangle(100,50,50,50);
  World.add(world,object4);
}
function draw()
{
 Engine. update(engine);
  background(0);
  rectMode(CENTER);
  fill("red");
    rect(object.position.x,object.position.y,100,50);
    fill("yellow");
    circle(object2.position.x,object2.position.y,100,50);
    fill("green");
    circle(object3.position.x,object3.position.y,100,50);
    fill("blue");

    rect(object4.position.x,object4.position.y,100,50);
    
}
