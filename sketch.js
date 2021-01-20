var ground;
var groundi;
var cat;
var cati,cata;
var mouse;
var mousei,mousea;
var done;

function preload() {
    groundi = loadImage("images/garden.png");
    cati = loadImage("images/tomOne.png");
    cata = loadAnimation("images/tomTwo.png","images/tomThree.png");
    mousei = loadImage("images/jerryTwo.png");
    mousea = loadImage("images/jerryOne.png");
    done = loadAnimation("images/tomFour.png");

}

function setup(){
    createCanvas(1000,800);
    ground = createSprite(500,400,300,300);
    ground.addImage("set",groundi);
  

    cat = createSprite(750,700,10,10);
    cat.addImage("tom", cati);
    cat.scale = 0.1;
    
    mouse = createSprite(100,700, 10,10);
    mouse.addImage("jerry",mousea);
    mouse.scale = 0.1;
  

}

function draw() {

    background(255);
    drawSprites();
    keyPressed();

     if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        
        cat .addAnimation("lastImage",done);
        cat.changeAnimation("lastImage");
        cat.velocityX = 0;
    }
   
   
  
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.addImage("op",mousei);
        cat.addAnimation("running",cata);
        cat.changeAnimation("running",cata );
        cat.velocityX = -2;
    }

}
