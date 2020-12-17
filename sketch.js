var wall, thickness;
var bullet;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  //assigning random values to the thickness
  thickness = random(22, 83);

  //creating the wall
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  //giving random weight and speed
  speed = random(223, 321);
  weight = random(30, 52);

  //creating the bullet
  bullet = createSprite(50, 200, 50, 30);
  bullet.shapeColor="white";

  //giving bullet velocity
  bullet.velocityX = speed;

}

function draw() {
  background(0,0,200); 

  if (hasCollided(bullet, wall)){

    //stopping the bullet when it touches the wall
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if (damage > 10){
      wall.shapeColor=color(225, 0, 0);
    }
    if (damage < 10){
      wall.shapeColor=color(0, 225, 0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x + wall.width;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else {
    return false;
  }
}