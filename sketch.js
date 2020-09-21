var fr, mr;

function setup() {
  createCanvas(1200,800);

 fr = createSprite(400, 200, 58, 80); 
 fr.shapeColor = "green";

 mr = createSprite(400, 200, 80, 30);
 mr.shapeColor = "red";

 mr.debug = true;
 fr.debug = true;

}

function draw() {
  background(255,255,255);  
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  
  if(fr.x - mr.x < fr.width / 2 + mr.width/2
    && mr.x - fr.x < fr.width / 2 + mr.width/2
    && fr.y - mr.y < fr.height / 2 + mr.height/2
    && mr.y - fr.y < fr.height / 2 + mr.height/2 ) {
      fr.shapeColor = "blue";
      mr.shapeColor = "yellow";
    }
    else {
      fr.shapeColor = "green";
      mr.shapeColor = "red";
    }

  drawSprites();
}