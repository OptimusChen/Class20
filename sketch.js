var fixedRect, movingRect;
var rectangle1, rectangle2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = 'green';
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = 'green';
  rectangle1 = createSprite(400, 100, 50, 80);
  rectangle1.velocityY = 4;
  rectangle2 = createSprite(400, 800, 40, 80);
  rectangle2.velocityY = -4;


}

function draw() {
  background(0, 0, 0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = 'red';
    fixedRect.shapeColor = 'red';
  }else{
    movingRect.shapeColor = 'green';
    fixedRect.shapeColor = 'green';
  }

  if (rectangle2.x - rectangle1.x < rectangle1.width/2 + rectangle2.width/2 
    && rectangle1.x - rectangle2.x < rectangle1.width/2 + rectangle2.width/2){
      rectangle2.velocityX = rectangle2.velocityX * (-1);
      rectangle1.velocityX = rectangle1.velocityX * (-1);

    }
    if(rectangle2.y - rectangle1.y < rectangle1.height/2 + rectangle2.height/2
      && rectangle1.y - rectangle2.y < rectangle1.height/2 + rectangle2.height/2){
      rectangle1.velocityY = rectangle1.velocityY * (-1);  
      rectangle2.velocityY = rectangle2.velocityY * (-1);  

    }
  drawSprites();
}