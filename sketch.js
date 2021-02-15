//the variables.
var helicopterIMG, 
	helicopterSprite, 
	packageSprite,
	packageIMG;

var packageBody,
	ground,
	zombieLeft,
	 zombieRight;

var leftBoxBody,
	rightBoxBody,
	bottomBoxBody;

var leftBoxSprite,
	rightBoxSprite,
	bottomBoxSprite;


const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

// function.
function preload() {
	//Loading images to two variables.

	helicopterIMG=loadImage("helicopter.png");

	packageIMG=loadImage("package.png");
	
}

// function.
function setup() {

	//Creating the canvas .
	createCanvas(800, 700);

	
	rectMode(CENTER);

	//packageSprite.

	packageSprite=createSprite(50, 50, 10,10);

	packageSprite.addImage(packageIMG);

	packageSprite.scale = 0.2;

	//helicopterSprite.

	helicopterSprite=createSprite(50, 70, 10,10);

	helicopterSprite.addImage(helicopterIMG);
	
	helicopterSprite.scale = 0.6;

	//groundSprite

	groundSprite=createSprite(width/2, height-35, width,10);

	groundSprite.shapeColor=color(80,50,70);


	engine = Engine.create();

	
	world = engine.world;

	packageBody = Bodies.circle(50 , 70 , 5 , {restitution:0, isStatic:true});
	
	World.add(world, packageBody);


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	World.add(world, ground);

	

	leftBoxSprite=createSprite(370, 635, 10,50);

	leftBoxSprite.shapeColor=color(255,0,0);

	bottomBoxSprite=createSprite(400, 655, 50,10);

	bottomBoxSprite.shapeColor=color(255,0,0);

	rightBoxSprite=createSprite(430, 635, 10,50);

 	rightBoxSprite.shapeColor=color(255,0,0);

	
	
 	leftBoxBody = Bodies.rectangle(370, 635, 10,70 , {isStatic:true} );

 	World.add(world, leftBoxBody);

 	bottomBoxBody = Bodies.rectangle(400, 655, 50,10 , {isStatic:true} );

 	World.add(world, bottomBoxBody);

 	rightBoxBody = Bodies.rectangle(430, 635, 10,70 , {isStatic:true} );

	World.add(world, rightBoxBody);

	//Running the previously created engine.
	Engine.run(engine);
}

function draw() {
	
	rectMode(CENTER);


	background(rgb(46,48,47));
	
	packageSprite.x = packageBody.position.x;

	packageSprite.y = packageBody.position.y;

	leftBoxSprite.x = leftBoxBody.position.x;

	leftBoxSprite.y = leftBoxBody.position.y;

	rightBoxSprite.x = rightBoxBody.position.x;
	
	rightBoxSprite.y = rightBoxBody.position.y;

	bottomBoxSprite.x = bottomBoxBody.position.x;
	bottomBoxSprite.y = bottomBoxBody.position.y;

  	drawSprites();
}


function keyPressed() {
	
	if (keyCode === LEFT_ARROW && packageSprite.y < 200) {
		helicopterSprite.x=helicopterSprite.x-30;    
		if(packageSprite.y < 200) {
			translation={x:-30,y:0}
			Matter.Body.translate(packageBody, translation)	
		}
	} 
	
	
	else if (keyCode === RIGHT_ARROW && packageSprite.y < 200) {

		helicopterSprite.x=helicopterSprite.x+30;

		if(packageSprite.y < 200) {

			translation={x:30,y:0}

			Matter.Body.translate(packageBody, translation)	
		}
	}

 	else if (keyCode === DOWN_ARROW && packageSprite.y < 200) {
    
		Matter.Body.setStatic(packageBody, false);
  	}
}


