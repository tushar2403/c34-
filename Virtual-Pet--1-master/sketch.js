var dogImg;
var happyDog;
var database;
var foodS;
var foodStock,dog;
function preload(){
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
 
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg);
  dog.scale=0.1;


  
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
  textSize(18);
  fill("white");
  text("Press Space",190,350);
  text("To feed tommy",180,330);
  text("Food Left: "+foodS,180,180);

  if(keyDown(32)&&foodS!==0){
    foodS=foodS-1
    writeStock(foodS);
    }
}
function readStock (data) {
  foodS=data.val();


}
function writeStock(food){
database.ref('/').update({
  food:food
})


}



