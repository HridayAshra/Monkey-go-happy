var obstacleGroup, obstacleImage, backdrop, backgroundImage, score, monkey, x, monkeyImage, bananaGroup, bananaImage, ground;

function preload(){
  
  monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  obstacleImage=loadImage("stone.png");
  bananaImage=loadImage("banana.png");
  backgroundImage=loadImage("jungle.png");
}

function setup() {
  createCanvas(400, 400);
  
  monkey=createSprite(50,245,10,10);
  monkey.addAnimation("running", monkeyImage);
  monkey.scale=0.10;
  

  ground=createSprite(200,350,3000,10);
  ground.visible=true;

obstacleGroup=new Group();
bananaGroup=new Group();
}

function draw() {
  background(400);
  
  x=0;
  score=0;
  
  if(keyDown("space")){
   monkey.velocityY=-10; 
  }
  
  monkey.velocityY=monkey.velocityY+0.9;

  
  monkey.collide(ground);
  
  if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
   x=x+2;
  }
  
  if(obstacleGroup.isTouching(monkey)){
   x=x-6;
  }
  
  score=Math.round(frameCount/50+x);
    text("score:"+score,200,100);
  
  switch(score){
  
          case 10: monkey.scale=0.12;
      break;
          case 20: monkey.scale=0.14;
      break;
          case 30: monkey.scale=0.16;
      break;
          case 40: monkey.scale=0.18;
      break;
          case 50: monkey.scale=0.20;
      break;
          case 60: monkey.scale=0.22;
      break;
          case 70: monkey.scale=0.24;
      break;
          case 80: monkey.scale=0.26;
      break;
          case 90: monkey.scale=0.28;
      break;
      
  }
  
  spawnBanana();
  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 70 == 0) {
    var obstacle = createSprite(400,325,10,40);
    obstacle.velocityX = -5;
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
    obstacle.addImage("stone", obstacleImage);
  }
}

function spawnBanana() {
  if(frameCount % 100 == 0) {
    var rand=random(200,325);
    var banana = createSprite(400,rand,10,40);
    banana.velocityX = -5;
    bananaGroup.add(banana);
    banana.scale=0.03
    banana.addImage("banana", bananaImage);
  }
}