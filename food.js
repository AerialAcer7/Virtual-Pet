class Food{
 constructor(x,y){
  this.body = Bodies.rectangle(x,y,20,20);  
  this.add.mousePressed(addFood);
  this.feed.mousePressed(feed);
  this.image = loadImage("Images/Milk.png");
  this.x = x;
  this.y = y;
  this.width = 20;
  this.height = 20;
 } 

 display(){
  imageMode(CENTER);
  image(this.image,this.x,this.y,this.width,this.height);
  }

}
