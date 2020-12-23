const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground
var particles=[]
var  plinkos=[]
var  divisions=[]
var divisionHeight=200;




function setup() {
 var Canvas=(480,1200);
  engine = Engine.create();
    world = engine.world;
ground=new Ground(180,390,850,20)



 for (var k = 10; k <=width; k = k + 75) {
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j=15; j<=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for (var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,30));
}
for (var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}
for (var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,120));
}

 
 




    Engine.run(engine)
}

function draw() {
  background(0);
  Engine.update(engine)
  for (var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
  for (var j=0; k<plinkos.length; j++){
   plinkos[j].display();
  }
  if(frameCount%10===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  ground.display();
  
   
  
  drawSprites();
}