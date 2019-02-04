var snk; 
var scl = 20;
var food;
var value = "right";
var status = "";
var frame = 10;
function setup() {
      createCanvas(600, 600);
      snk = new Snake();
      frameRate(frame);
      pickLocation();
      
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw(){
  background(25);
  snk.death();
  snk.update();
  snk.show();

  if (snk.eat(food)){
    pickLocation();
  }
  if (status =="dead"){
    var element = document.getElementById("game_over");
    element.classList.add("over");
    element.style.display = "block";
    frame = 0;
    frameRate(frame);

  }

  fill(255,255,255);
  rect(food.x, food.y, scl, scl);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    if (value == "down"){
      snk.dir(0,1);
      
    }
    else {
      value = "up";
      snk.dir(0,-1);
    }
    
  }else if (keyCode === DOWN_ARROW){
    if (value=="up"){
      snk.dir(0,-1);
    }
    else{
      value = "down"
      snk.dir(0,1);
    }
    
  }else if(keyCode === RIGHT_ARROW){
    if (value =="left"){
      snk.dir(-1,0);
    }
    else{
      value = "right";
      snk.dir(1,0);
    }
    
  }else if(keyCode === LEFT_ARROW){
    if (value == "right"){
      snk.dir(1,0);
    }
    else{
      value = "left";
      snk.dir(-1,0);
    }
 
  }
}

function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];


  this.death = function(){
    for (var i = 0; i < this.tail.length; i++){
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y)

      if(d<1){
        this.total = 0;
        this.tail = [];
        status = "dead";
      }
    }

  }

  this.update = function(){
    if (this.total === this.tail.length){
    for (var i=0; i <this.tail.length -1; i++){
      this.tail[i] = this.tail [i+1];
    }
    
  }
    this.tail[this.total-1] = createVector(this.x,this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }
  this.eat = function(pos){
    var d =dist(this.x, this.y, pos.x, pos.y);
    if (d < 1){
      this.total++;
      return true;
    }
    else{
      return false;
    }
  }
  this.show = function(){
    for (var i = 0; i< this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    fill(255);
    rect(this.x, this.y, scl,scl);
  }
  this.dir = function(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }
}

function starOver(){
  var element = document.getElementById("game_over");
    element.style.display = "none";
    frame = 10;
    frameRate(frame);
    status = "alive";
}
// if (status =="dead"){
//   var element = document.getElementById("game_over");
//   element.classList.add("over");
// }





// let x1 = 10;
// let y1 = 300;
// let x2 = 40;
// let y2 = 300;
// let value;
// function draw() {
//     background(000);
//     var line1 = line(x1, y1, x2, y2);
//     strokeWeight(3);
//     stroke(255);
    
// }
// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     value="left";
//     x1 = x1-3;
//     y1 = 250;
//     x2 = x2-3;
//     y2 = 250;
//   } else if (keyCode === RIGHT_ARROW) {
//     value="right";
//     x1 = x1+3;
//     y1 = 250;
//     x2 = x2+3;
//     y2 = 250;
//   }
//   else if (keyCode === UP_ARROW) {
//     value="up";
//   }
//   else if (keyCode === DOWN_ARROW) {
//     value="up";
//   }
  
  
// }


// function MoveDown(){

// }
// function MoveRight(){

// }
// function MoveLeft(){

// }











// var canvas = document.getElementById("snake");
// var ctx = canvas.getContext("2d");


// function draw(ctx, x,y){
//     ctx.moveTo(50,100);
//     ctx.lineTo(x, y);
//     ctx.strokeStyle = '#fff';
//     ctx.lineWidth=5; 
//     ctx.stroke();
  
// }

// draw(ctx,100,100);

