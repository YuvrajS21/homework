function setup() {
  createCanvas(400, 400);
}

function prelode(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym21.png");
  eat=loadAnimation("images/eat.png");
  drink=loadAnimation("images/drink.png");
  move=loadAnimation("images/move.png");
}

astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;


if(KeyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocity=0;
}



function draw() {
  background(220);
}