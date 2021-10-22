var bg;
var shooterAnimation; 

var shooter;
var city;



function preload(){
   bg = loadImage("images/city.jpg")
   shooterAnimation = loadAnimation("images/shooter1.png","images/shooter2.png","images/shooter3.png",
   "images/shooter4.png","images/shooter5.png","images/shooter6.png")

}

 
 function setup(){
    var canvas = createCanvas(1200,600);
    

    city = createSprite(600,300);
    city.addImage(bg)
    city.scale = 2.1
    city.velocityX = -2
    
    shooter = createSprite(100,450);
    shooter.addAnimation("shooter",shooterAnimation)
    shooter.scale=0.5;


 }

function draw(){
background("black")
//if(keyDown("w")){
//shooter.x = shooter.x+4
//}

if(city.x < 0){
city.x = width/2
}

 shooter.x = camera.position.x -500
 


 drawSprites();
}



