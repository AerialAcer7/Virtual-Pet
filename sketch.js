var dog,sadDog,happyDog;
var foods,foodImg,milk;
var addFoods,feedDog;
var database;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  foodImg = loadImage("Images/Milk.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  readFood();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //food button
   addFoods = createButton("Add Food");
   addFoods.position(950,100);
   addFoods.mousePressed(addFood);

   feedDog = createButton("Feed Dog");
   feedDog.position(950,175);
   feedDog.mousePressed(feed);
  
}

function draw() {
  background(46,139,87);
  drawSprites();

  console.log(foods);

  var x = 50;
  var y = 50;
  for(var i=0;i<foods;i=i+1){ 
   if(i%5 === 0){
    y = y+100; 
    x = 50;
   }
   milk = createSprite(x,y);
   milk.addImage("food",foodImg); 
   milk.scale = 0.1;
   x = x+50;
  }
}

function addFood(){
  foods = foods+1; 
 database.ref('/').update({food:foods});
}

function feed(){
  if(foods>0){
  foods = foods-1; 
  }
 database.ref('/').update({food:foods});
}

function readFood(){
 database.ref('/food').on("value",function(data){
   foods=data.val();
 });
}

