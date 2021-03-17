
var sword, swordImg, fruitGroup, enemyGroup, appleFruit, pearFruit, enemy1, enemy2, randomDisplay, orangeFruit, bananaFruit;

var orangeImg, appleImg,pearImg, bananaImg, enemy1Img, enemy2Img;

var score = 0, gameOver, gameOverImg;



var PLAY = 0;
var END = 1;
var gameState = PLAY;

function preload(){
  //All the images will be loaded here
  swordImg= loadImage("sword.png");
  
  orangeImg = loadImage("fruit1.png");
  
  appleImg = loadImage("fruit2.png");
  
  pearImg = loadImage("fruit3.png");
  
  bananaImg = loadImage("fruit4.png");
  
  enemy1Img = loadImage("alien1.png");
  
  enemy2Img = loadImage("alien2.png");
  
  gameOverImg = loadImage("gameover.png");                          
}

function setup(){
  
  createCanvas (400,400);
  
  //groups are created
  fruitGroup = new Group();
  enemyGroup = new Group();
  
  //sword is created
  sword = createSprite(200,100,10,10);
  sword.setCollider("rectangle", 25,-30, 50,50, 35);
  sword.scale = 0.5;
  sword.addAnimation("sword", swordImg);

  
}

function draw(){
  background("blue");
  //sword.debug = true;
  
  if(gameState === PLAY){ 
    sword.y = mouseY;
    sword.x = mouseX;
    fruit(); 
    enemies();
    
    if (sword.isTouching(fruitGroup)){
      score ++; 
      fruitGroup.destroyEach();
    }
    
    if (sword.isTouching(enemyGroup)){
      gameState = END; 
    }
    
  }
  
  if (gameState === END){
    fruitGroup.destroyEach(); 
    enemyGroup.destroyEach();
    gameOver = createSprite(200,200,20,20); 
    gameOver.addAnimation("over", gameOverImg);
      
  }
  
  drawSprites();
  
  fill("gold");
  stroke("black");
  textSize(20);
  text("Score: " + score, 300, 20);  
  
  randomDisplay = Math.round(random(30,370));
  var position = Math.round(random(1,2));
  
  function orange(){

    orangeFruit = createSprite(randomDisplay,420,100,2);
    orangeFruit.scale = 0.2;
    orangeFruit.velocityY = -8;
    orangeFruit.addAnimation("orange", orangeImg);
    orangeFruit.lifetime = 220; 
    if (position === 1){
      orangeFruit.x = 400;
      orangeFruit.velocityY = -(7+score/4);
    }
    
    fruitGroup.add(orangeFruit); 
   
  }
  
  function apple(){ 
 
    appleFruit = createSprite(randomDisplay,420,10,10);
    appleFruit.scale = 0.2;
    appleFruit.addAnimation("apple", appleImg);
    appleFruit.velocityY = -8;
    appleFruit.lifetime = 220;
    fruitGroup.add(appleFruit);
    
  }
  
  function pear(){
   
    pearFruit = createSprite(randomDisplay,420,10,10);
    pearFruit.scale = 0.2;
    pearFruit.addAnimation("pear", pearImg);
    pearFruit.velocityY = -8;
    pearFruit.lifetime = 220;
    fruitGroup.add(pearFruit);
    
  }
  
  function banana(){
    bananaFruit = createSprite(randomDisplay,420,10,10);
    bananaFruit.scale = 0.18;
    bananaFruit.addAnimation("banana", bananaImg);
    bananaFruit.velocityY = -8;
    bananaFruit.lifetime = 220;
    fruitGroup.add(bananaFruit);
    
  }
  
  function enemy_1(){ 
    enemy1 = createSprite(randomDisplay,420,10,10);
    enemy1.addAnimation("enemy1", enemy1Img);
    enemy1.velocityY = -8;
    enemy1.lifetime = 220;
    enemyGroup.add(enemy1); //added
    
  }
  
  function enemy_2(){ 

    enemy2 = createSprite(randomDisplay,420,10,10);
    enemy2.addAnimation("enemy2", enemy2Img);
    enemy2.velocityY = -8;
    enemy2.lifetime = 220;
    enemyGroup.add(enemy2);
    
  }
  
  function fruit(){ 
    if (frameCount % 40 ===0){
      var select_fruit = Math.round(random(1,4));
      switch(select_fruit){
        case 1: orange();
                break;
        case 2: apple()
                break;
        case 3: pear();
                break;
        case 4: banana();
                break;
        default: break;
        
      }
    
    }
     
  }
  
  function enemies(){
    if (frameCount%100 === 0){
      var select_enemy = Math.round(random(1,2));
      switch(select_enemy){
        case 1: enemy_1();
                break;
        case 2: enemy_2();
                break;
        default: break;
        
      }
                
    }
    
  }
    
}