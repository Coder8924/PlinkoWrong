const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall1, wall2, wall3, wall4, wall5;
var base1,base2,base3,base4;
var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10,
plinko11, plinko12, plinko13, plinko14, plinko15, plinko16, plinko17, plinko18, plinko19, plinko20,
plinko21, plinko22, plinko23, plinko24, plinko25, plinko26, plinko27, plinko28, plinko29, plinko30,
plinko31, plinko32, plinko33, plinko34, plinko35, plinko36, plinko37, plinko38;

function setup() {

  createCanvas(500,650);

  engine = Engine.create();
  world = engine.world;

wall1 = new Divisions(100,100,10,50);

base1 = new Ground(250,600,500,10);
base2 = new Ground(495,300,10,700);
base3 = new Ground(5,300,10,700);

plinko1 = new Particle(100,100,5);

}

function draw() {

  Engine.update(engine);

  background(0);  

  wall1.display();

  base1.display();
  base2.display();
  base3.display();

  plinko1.display();

  drawSprites();
}