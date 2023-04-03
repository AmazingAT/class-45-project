var bgImg
var johnImg
var tommyImg
var ballImg
var pinImg

var john
var tommy
var ball
var pin


function preload(){
  bgImg=loadImage("lane.jpg")
  johnImg=loadImage("john.png")
  tommyImg=loadImage("tommy.png")
  ballImg=loadImage("ball.png")
  pinImg=loadImage("pin.png")

  





}


function setup() {
  createCanvas(windowWidth, windowHeight);

  
  

   john=createSprite(width/2-100,height-50)
   john.addImage(johnImg)
   john.scale=0.33

   tommy=createSprite(width/2+125,height-50)
   tommy.addImage(tommyImg)
   tommy.scale=0.8

   pin=createSprite(width/2, height/2-150)
   pin.addImage(pinImg)
   pin.scale=0.2

   pin=createSprite(width/2+30, height/2-150)
   pin.addImage(pinImg)
   pin.scale=0.2

   pin=createSprite(width/2-30, height/2-150)
   pin.addImage(pinImg)
   pin.scale=0.2

   pin=createSprite(width/2+40, height/2-150)
   pin.addImage(pinImg)
   pin.scale=0.2

   pin=createSprite(width/2-40, height/2-150)
   pin.addImage(pinImg)
   pin.scale=0.2




}



function draw() {
  background(bgImg);  
  drawSprites();
}