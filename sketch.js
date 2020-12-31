//Create variables here
var dog,dog1,happyDog,foodS,foodStock,database
function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database =firebase.database();
dog1 = createSprite(250,300,10,10)
dog1.addImage(dog)
dog1.scale=0.2
foodStock=database.ref('food')
foodStock.on("value",readstoke)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStoke(foodS)
  dog1.addImage(happyDog)
}
readstoke()
writeStoke()

  drawSprites();
  //add styles here
text("press UP ARROW to feed pinkey",250,150)

}

function readstoke(data){
  foodS=data.val();
}

function writeStoke(x){
  database.ref('/').update({
    Food:x
  })
}

