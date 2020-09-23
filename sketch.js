var monkey,ground,bananaGroup,obstaclesGroup;
var monkey_running,invisible_ground,banana;
var bananaImage,obstacleImage,obstacle;

function preload() 
{
  //For  loading the images.
  monkey_running=    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage=loadImage("banana.png");
  
  obstacleImage=loadImage("obstacle.png");
}

function setup() 
{
  //To make the canvas.
  createCanvas(600,500);
  
  //Creating the sprites.
  //To create the monkey.
  monkey=createSprite(120,305,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.3;
 
  //To make and declare the groups.
  bananaGroup=new Group();
  obstaclesGroup=new Group();
  
  invisible_ground=createSprite(400,410,900,10);
  invisible_ground.visible=false;
}

function draw() 
{ 
  background("Yellow");
  
  //To create the ground.
  ground=createSprite(400,400,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  if(keyDown("space")&& monkey.y >= 305)
  {
    monkey.velocityY = -19;
     }
  
  //To add gravity.
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(invisible_ground);
  
  food();
  obstacles();
  drawSprites();
}

//To create a function for food.
function food() 
{
   if (frameCount%80===0)
   {    
    banana=createSprite(600,50,20,20);
    banana.addImage(bananaImage); 
    banana.scale=0.2;
    banana.velocityX=-4;
    banana.y=Math.round(random(50,200));
    banana.lifetime=150; 
    bananaGroup.add(banana);   
   }
}

function obstacles() 
{
   if(frameCount%300===0)
   {
     obstacle=createSprite(600,340,20,20);
     obstacle.velocityX=-4;
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.2;
  
    }
}