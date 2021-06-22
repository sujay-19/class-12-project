var garden,rabbit,apple,green,red
var gardenImg,rabbitImg,appleimg,greenimg,redimg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  greenimg = loadImage("leaf.png")
  redimg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 === 0) {
    if (select_sprites === 1) {
      createapple();
    } else if (select_sprites === 2) {
      creategreen();
    }else {
      createred();
    }
  }
  drawSprites();
}




function createapple() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleimg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function creategreen() {
green = createSprite(random(50, 350),40, 10, 10);
green.addImage(greenimg);
green.scale=0.08;
green.velocityY = 3;

}

function createred() {
red = createSprite(random(50, 350),40, 10, 10);
red.addImage(redimg);
red.scale=0.06;
  red.velocityY = 3;
  red.lifetime = 150;
}