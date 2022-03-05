var bg1;
var ninja, sensei, boxer, wizard, sensei2, tentacular, djimmi, toad, boss;
var ninjaImg, senseiImg, boxerImg, wizardImg, sensei2Img, tentacularImg,
djimmiImg, toadImg, bossImg;
var edges;

function preload() {
  bg1 = loadImage("./assets/Level1_DojoBG.webp");
  ninjaImg = loadImage("./assets/character.png");
  senseiImg = loadImage("./assets/Sensei.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ninja = createSprite(1190,540, 20, 20);
  ninja.addImage(ninjaImg);
  ninja.velocityY=-2;

  sensei = createSprite(170, 520, 20, 20);
  sensei.addImage(senseiImg);
  sensei.scale = 0.18

  //edges = createEdgeSprites();
}

function draw() {
  background(bg1);

  if(keyDown("left")){
    ninja.x=ninja.x -2;
  }
  

  if(keyDown("RIGHT_ARROW")){
    ninja.x = ninja.x +2;
  }
  //ninja.bounceOff(edges);
  drawSprites();
  textSize(30);
  text(mouseX + "," + mouseY, mouseX, mouseY);
}
