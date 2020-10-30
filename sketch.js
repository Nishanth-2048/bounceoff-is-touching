var fixedRect, movingRect;

var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor = "green";
  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor = "green";
  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor = "green";
}

function draw() {
  background(0,0,0); 
  
  gameobject2.y=World.mouseY;
  gameobject2.x=World.mouseX;

  if(isTouching(gameobject2,gameobject1)){
    gameobject2.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
  else{
    gameobject2.shapeColor = "green";
    gameobject1.shapeColor = "green";
  }
  bounceoff(fixedRect,movingRect);


  drawSprites();
}

