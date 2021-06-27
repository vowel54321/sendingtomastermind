
var AnimeQ,PhysicsQ,MathsQ,BTSQ,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,cross;

function preload()
{
 AnimeQImg=loadAnimation("QP1NN.png","QP2NN.png","QP3NN.png","QP4NN.png","QP5NN.png")
 PHYQImg = loadAnimation("PHY1.png","PHY2.png","PHY3.png","PHY4.png","PHY5.png");
 BTSQImg= loadAnimation("qBTS2 (1).png");
 MATQImg= loadAnimation("MAT2.png","MAT3.png","MAT4.png","MAT5.png")
 CrossImg=loadAnimation("gameOver (1).png")
bgImg=loadImage("Mj.jpg");
AnimeQues=loadAnimation("AnimeQ.jpg")
PhysicsQues=loadAnimation("PhyQ.png")
MathsQues=loadAnimation("MathsQ.png")
BTSQues=loadAnimation("BTSQ.jpg")

}




function setup()
{
  createCanvas(displayWidth, displayHeight);
  AnimeQ = createSprite(235,135,20,20);
 AnimeQ.scale=0.2;
  AnimeQ.addAnimation("Animeq",AnimeQImg);
  AnimeQ.addAnimation("AnQ",AnimeQues);
  //AnimeQ.setAnimation(AnimeQImg);
  PhysicsQ= createSprite(331,260,100,100);
  PhysicsQ.scale=2;
  PhysicsQ.addAnimation("Physicsq",PHYQImg)
  PhysicsQ.addAnimation("PhQ",PhysicsQues);
player=createSprite(10,150,20,20);
player.shapeColor="red";
  MathsQ= createSprite(264,365,20,20);
  MathsQ.addAnimation("MATq",MATQImg)
  MathsQ.addAnimation("MaQ",MathsQues)

  BTSQ = createSprite(330,25,20,20);
  BTSQ.addAnimation("BTSq",BTSQImg);
  BTSQ.addAnimation("BTQ",BTSQues);
  cross=createSprite(216.19,20,20);
  cross.addAnimation("CrosIm",CrossImg)
 
  m1 = createSprite(displayWidth-400, displayHeight/8-20, 8, displayHeight/4);
    m1.shapeColor = "green";

    m2 = createSprite(displayWidth/4, 20, 8, displayHeight/4);
    m2.shapeColor = "green";

    m3 = createSprite(displayWidth/2, 30, 7, displayHeight/4);
    m3.shapeColor = "green";

    m4 = createSprite(120, 250, displayWidth/4, 8);
    m4.shapeColor = "green";

    m5 = createSprite(200, 400, displayWidth/7, 8);
    m5.shapeColor = "green";

    m6 = createSprite(displayWidth-10,displayHeight-10 , displayWidth/7, 10);
    m6.shapeColor = "green";
    
    m7 = createSprite(displayWidth - 70, 450, 8, displayHeight/4);
    m7.shapeColor = "green";

    m8 = createSprite(100, 100, displayWidth/5, 8);
    m8.shapeColor = "green";

    m9 = createSprite(displayWidth/2 - 20, 550, 8, displayHeight/5);
    m9.shapeColor = "green";
    
    m10 = createSprite(displayWidth - 300, 50, displayWidth/4,8);
    m10.shapeColor = "green";

    m11 = createSprite(displayWidth/8, 20, 8, 90);
    m11.shapeColor = "green";

    m12 = createSprite(1000, 500, displayWidth/6, 8);
    m12.shapeColor = "green";

    m13 = createSprite(830, 120, 8, displayHeight/4);
    m13.shapeColor = "green";
    
    m14 = createSprite(900, 600, displayWidth/8, 8);
    m14.shapeColor = "green";

    m15 = createSprite(displayWidth-200, displayHeight-10, 8, displayHeight/4);
    m15.shapeColor = "green";

    m16 = createSprite(displayWidth-500, displayHeight-50, displayWidth/4, 8);
    m16.shapeColor = "green";

    m17 = createSprite(displayWidth-300, 700, 8, displayHeight/4);
    m17.shapeColor = "green";

    m18 = createSprite(displayWidth-900, 500, 8, displayHeight/4);
    m18.shapeColor = "green";

    m19 = createSprite(displayWidth-1200, 500, displayWidth/5, 8);
    m19.shapeColor = "green";

    m20 = createSprite(displayWidth-800, 750, 8, displayHeight/4);
    m20.shapeColor = "green";
  
    m21 = createSprite(displayWidth-80, 50, 8, displayHeight/4);
    m21.shapeColor = "green";

    m22 = createSprite(displayWidth-200, 270, displayWidth/5, 8);
    m22.shapeColor = "green";

    m23 = createSprite(displayWidth/6-50, 1070, displayWidth/5, 8);
    m23.shapeColor = "green";

    m24 = createSprite(displayWidth/10-50, 170, displayWidth/5, 8);
    m24.shapeColor = "green";

    m24 = createSprite(displayWidth/10-50, 770, displayWidth/5, 8);
    m24.shapeColor = "green";

    m25 = createSprite(displayWidth/10, 970, displayWidth/5, 8);
    m25.shapeColor = "green";

    m26 = createSprite(displayWidth/4+170, 10, 8, displayHeight/2);
    m26.shapeColor = "green";

    m27 = createSprite(150, 680, 8, displayHeight/4);
    m27.shapeColor = "green";

    m28 = createSprite(350, 670, displayWidth/6, 8);
    m28.shapeColor = "green";

  }
  
function draw() {
background(bgImg)
cross.scale=0.1;
//cross.setAnimation("CS.png_1");

cross.bounceOff(m1);
cross.bounceOff(m2);
cross.bounceOff(m3);
cross.bounceOff(m4);
cross.bounceOff(m5);
cross.bounceOff(m6);
cross.bounceOff(m7);
cross.bounceOff(m8);
cross.bounceOff(m9);
cross.bounceOff(m10);
cross.bounceOff(m11);
cross.bounceOff(m12);
cross.bounceOff(m13);
cross.bounceOff(m14);
cross.bounceOff(m15);

cross.bounceOff(m16);
cross.bounceOff(m17);
cross.bounceOff(m18);
cross.bounceOff(m19);
cross.bounceOff(m20);
cross.bounceOff(m21);
cross.bounceOff(m22);
cross.bounceOff(m23);
cross.bounceOff(m24);
cross.bounceOff(m25);
cross.bounceOff(m26);
cross.bounceOff(m27);
cross.bounceOff(m28);

player.bounceOff(m1);
player.bounceOff(m2);
player.bounceOff(m3);
player.bounceOff(m4);
player.bounceOff(m5);
player.bounceOff(m6);
player.bounceOff(m7);
player.bounceOff(m8);
player.bounceOff(m9);
player.bounceOff(m10);
player.bounceOff(m11);
player.bounceOff(m12);
player.bounceOff(m13);
player.bounceOff(m14);
player.bounceOff(m15);
player.bounceOff(m16);
player.bounceOff(m17);
player.bounceOff(m18);
player.bounceOff(m19);
player.bounceOff(m20);
player.bounceOff(m21);
player.bounceOff(m22);
player.bounceOff(m23);
player.bounceOff(m24);
player.bounceOff(m25);
player.bounceOff(m26);
player.bounceOff(m27);
player.bounceOff(m28);

if(keyDown("right"))
{
  player.x+=5;
}
if(keyDown("left"))
{
  player.x-=5;
}
if(keyDown("up"))
{
  player.y-=5;
}
if(keyDown("down"))
{
  player.y+=5;
}

if(player.isTouching(AnimeQ))
{
  AnimeQ.changeAnimation("AnQ",AnimeQues)
}

if(player.isTouching(PhysicsQ))
{
  PhysicsQ.changeAnimation("PhQ",PhysicsQues)
}

if(player.isTouching(BTSQ))
{
  BTSQ.changeAnimation("BTQ",BTSQues)
}

if(player.isTouching(MathsQ))
{
  MathsQ.changeAnimation("MaQ",MathsQues)
}

PhysicsQ.scale=0.1;
//PhysicsQ.setAnimation("QM.png_1");

MathsQ.scale=0.1;
//MathsQ.setAnimation("QM.png_1");

BTSQ.scale=0.1;
////////////////////////////////////////////////////BTSQ.setAnimation("QM.png_1");




text("AnimeQ",245,135);
textSize(15);
text('PhysicsQ',335,256);
text("MathsQ",236,353);
text("BTSQ",345,20);
drawSprites();

cross.bounceOff(edges);
}

