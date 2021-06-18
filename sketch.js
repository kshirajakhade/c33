var snow1, snow2

function preload()
{
 snow1 = loadImage("snow2.jpg")
 snow2 = loadImage("snow4.webp")
}





function setup() {
  createCanvas(800,400);
}

function draw() {
  background(snow1);  
  snowfallImage()
  drawSprites();
}

function snowfallImage()
{
  if(frameCount%25===0)
  {
    snowfall = createSprite(random(0,800),10,20,20,20)
    snowfall.addImage(snow2)
    snowfall.velocityY = 3
    snowfall.scale = 0.2
  }
}