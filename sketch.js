
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(900,200,30);
	mango3=new mango(1000,300,30);
	mango4=new mango(1200,250,30);
	mango5=new mango(1020,110,30);
	mango6=new mango(1080,210,30);


	stoneObj = new Stone(230, 420, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new Constraint1(stoneObj.body , {x:230 , y:420});
	
    var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
		});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(30);
  text("press 'space' to get a second chance to throw", 50, 40);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
  launcherObject.display();

  groundObject.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);

}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:230, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
	
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
	  {
		//console.log(distance);
		  Matter.Body.setStatic(lmango.body,false);
	  }
	}