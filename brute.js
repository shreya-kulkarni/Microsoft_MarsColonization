 var grid = 30;
var gridOffset = grid / 2;
var locations = [];
var totalLocations;
var count=0;
var recordDistance;
var bestEver=[];
var iteration=0;
var click=0;
function bstart(temp)
{
totalLocations=temp;
console.log(totalLocations);
}

function setup() {
 

  createCanvas(1455, 550);
  background(0);
   frameRate(3);
  // Draw grid
  var l = 0;
  strokeWeight(1);
  stroke(151);
  while (l < width || l < height) {
    line(0, l, width, l);
    line(l, 0, l, height);
    l += grid;
  }
  strokeWeight(25);
  line(width/2,0,width/2,height)

}


function mousePressed()
{
  if(count<totalLocations && mouseX)
   {strokeWeight(10); 
    stroke('white');
    point(mouseX, mouseY, 10, 10);
    var v=createVector(mouseX,mouseY);
    locations.push(v);
    count++;
    text(`Mark more : ${(totalLocations-count)} locations`,10,50)
}
if(count==totalLocations)
{
  var d = calcDistance(locations);
    recordDistance = d;
    bestEver = locations.slice();

}
}




 

function draw() {
  //background(bg);
  var l = 0;
  iteration++;
  strokeWeight(1);
  stroke(151);
  while (l < width || l < height) {
    line(0, l, width, l);
    line(l, 0, l, height);
    l += grid;
  } 
  strokeWeight(25);
  line(width/2,0,width/2,height)

    if(count==totalLocations)
  {
    

  background(0);
  fill(0);
  console.log(recordDistance);
  strokeWeight(10);
  text(`This is our best path
    Best Distance: ${(recordDistance)} kms!`,width/4,50)
  var l = 0;
  strokeWeight(1);
  stroke(151);
  while (l < width || l < height) {
    line(0, l, width, l);
    line(l, 0, l, height);
    l += grid;
  }

   strokeWeight(25);
  line(width/2,0,width/2,height)



  fill(255);
  for (var i = 0; i < locations.length; i++) {
    strokeWeight(20); 
    point(locations[i].x, locations[i].y, 8, 8);
    
  }
  
  stroke('white');
  strokeWeight(2);
  noFill();
  beginShape();
  for (var i = 0; i < locations.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
    stroke('white');
    text(i+1,bestEver[i].x+10,bestEver[i].y+10);
  }
  endShape();

 translate(width/2, 0);

 stroke('red');
  strokeWeight(2);
  noFill();
  beginShape();
  for (var i = 0; i < locations.length; i++) {
    ellipse(locations[i].x, locations[i].y, 8, 8);
    vertex(locations[i].x, locations[i].y);
    text(i+1,bestEver[i].x+10,bestEver[i].y+10);
  }
  endShape();
  
  

  var i = floor(random(locations.length));
  var j = floor(random(locations.length));
  swap(locations, i, j);

  var d = calcDistance(locations);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = locations.slice();
    
  }
  }
  



}



function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points) {
  var sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}
function check()
{
  
  noLoop();
  
}

