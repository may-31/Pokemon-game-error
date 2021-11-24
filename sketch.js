var trainer1,trainer2,t1IMG,t2IMG;
var Poke1,Poke2,p1Img,p2Img;
var FireBlast,PyroBall,FImg,SImg;
var button,A1,A2,turn1,turn2
var Charizard,sceptile,MC,MS,MB,MI
var CharizardImg,sceptileImg,MCImg,MSImg,MBImg,MIImg
function preload() {
 t1IMG=loadImage("download.jpg");
 t2IMG=loadImage("May.png");
 p1Img=loadImage("Infernape-removebg-preview.png");
 p2Img=loadImage("Blaziken.png");
 FImg=loadImage("FireBlast2.png");
 SImg=loadImage("SunImage.png");
 CharizardImg=loadImage("Charizard.png");
 sceptileImg=loadImage("Sceptile.png");
 MCImg=loadImage("Mega Charizard.png");
 MSImg=loadImage("Sceptile Mega.png");
 MBImg=loadImage("mega Blaziken.png");
 MIImg=loadImage("Mega Inpernape.png");
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);

  button=createButton("start").position(100,100);
  button.mousePressed(Bringpoke);

}

function draw() {
  background(248,248,248);  
  drawSprites();
}
function Bringpoke(){

  trainer1=createSprite(150,400,50,50);
  trainer1.addImage(t1IMG);
  trainer1.scale=1.5;
  trainer2=createSprite(1250,400,50,50);
  trainer2.scale=0.3;
  trainer2.addImage(t2IMG);

  Poke1=createSprite(400,500,50,50);
  Poke1.addImage(p1Img)
  Poke1.scale=0.5;
 
  Poke2=createSprite(1000,450,50,50);
  Poke2.addImage(p2Img);
  Poke2.scale=1.6;

  A1=createButton("Attack").position(1000,630);
  A1.mousePressed(FireBlast1);

  A2=createButton("Attack").position(400,630);
  A2.mousePressed(FireBlast2);

  turn1=createButton("Switch").position(450,630);
  turn1.mousePressed(turnPoke1);

  turn2=createButton("Switch").position(100,100);
  turn2.mousePressed(turnPoke2);


}

function FireBlast1(){

  PyroBall=createSprite(850,500,50,50);
  PyroBall.addImage(SImg)
  PyroBall.scale=0.3;
  PyroBall.velocity.x=-2;
  
}
function FireBlast2(){
  FireBlast=createSprite(550,500,50,50);
  FireBlast.addImage(FImg)
  FireBlast.scale=0.3;
  FireBlast.velocity.x=2;

}
function turnPoke1(){
  Poke1=visible(false);
 Charizard=createSprite(200,200,50,50);
 Charizard.addImage(CharizardImg)
}
