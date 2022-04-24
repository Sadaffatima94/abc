const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var backgroundImage
var tower;

function preload() {
 backgroundImage=loadImage("assets/background.gif")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  tower=new Tower(50,200,200,400)
  
 
}

function draw() {
  background(189);
 
  Engine.update(engine);
  image(backgroundImage,0,0,width,height) ;
  tower.display()
   
}
