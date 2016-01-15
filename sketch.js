

function setup() {
  createCanvas(windowWidth,windowHeight)
  
}

function draw() {
background(255)
for(var x=0; x<width; x+= 100){
  for(var y=0; y<width; y+=50){
  stroke(150,x,y) 
  strokeWeight(1.5)
  line(x,y,width/2,height/2)  
    
  }

}

}