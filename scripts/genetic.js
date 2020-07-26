//declare varialbles
var totalLocations;
var grid = 30;
var gridOffset = grid / 2;
var order=[];
var popSize = 100;
var population = [];
var fitnessValue = [];
var iteration;
var recordDistance = Infinity;
var bestEver;
var currentBest;
var locations = [];
var current;
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var count=0;
var click=0;
//Get the value of total Locations.
function start(temp)
{
totalLocations=temp;

console.log(totalLocations);
}

//setup background gird
function setup() {

  createCanvas(1455, 550);
  background(0);
   frameRate(5);
  
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


//get the location coordinates
function mousePressed()
{
  if(count<totalLocations && mouseX)
   {strokeWeight(10); 
    stroke('white');
    point(mouseX, mouseY, 10, 10);
    var v=createVector(mouseX,mouseY);
    locations.push(v);
    count++;
     text(`Mark ${(totalLocations-count)} more locations`,10,50)
    {for(var i=0;i<totalLocations;i++)
  {
    order[i]=i;
  }
  for (var i = 0; i < popSize; i++) {
    population[i] = shuffle(order);
  }}
}
}


function draw() {

  var l = 0;
  iteration++;
  strokeWeight(1);
  stroke(151);
  while (l < width || l < height) {
    line(0, l, width, l);
    line(l, 0, l, height);
    l += grid;
  }strokeWeight(25);
  line(width/2,0,width/2,height)
  strokeWeight(10);
  text(`This is our best path
    Best Distance: ${(recordDistance)} kms!`,width/4,50)
  strokeWeight(10);
  text(`Current Total Distance of the given path: ${(current)} kms!`,3*width/4-30,50)


    if(count==totalLocations)
  {
    //if(iteration==1)
    
  
  background(0);
  fill(0);
  noStroke();
  textSize(12);
  
  console.log(recordDistance);
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
  strokeWeight(10);
  text(`This is our best path
    Best Total Distance: ${(recordDistance)} kms!`,width/4,50)
  strokeWeight(10);
  text(`Current Total Distance of the given path: ${(current)} kms!`,3*width/4-30,50)


  //use genetic algorithm functions
  calculateFitness();
  normalizeFitness();
  nextGeneration();


  //mark the locations coordinate
  fill(255);
  for (var i = 0; i < locations.length; i++) {
    strokeWeight(10); 
    point(locations[i].x, locations[i].y, 5, 5);
    
  }
 
  //display the best path
  stroke('white');
  strokeWeight(2);
  noFill();
  beginShape();

  for (var i = 0; i < bestEver.length; i++) {
    var n = bestEver[i];
    vertex(locations[n].x, locations[n].y);
    point(locations[n].x, locations[n].y, 5, 5);
    text(i+1,locations[n].x+10,locations[n].y+10);
  }
  endShape();

  translate(width/2, 0);

  //display the current path
  stroke('red');
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < currentBest.length; i++) {
    var n = currentBest[i];
    vertex(locations[n].x, locations[n].y);
    ellipse(locations[n].x, locations[n].y, 5, 5);
     text(i+1,locations[n].x+10,locations[n].y+10);
  }
  endShape();
}
  
 
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}


function calcDistance(points, order) {
  var sum = 0;
  for (var i = 0; i < totalLocations-1; i++) {
    var cityAIndex = order[i];
    var cityA = points[cityAIndex];
    var cityBIndex = order[i + 1];
    var cityB = points[cityBIndex];
    var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    sum += d;
  }
  return sum;
}

//button functions
function check()
{
  click++;
  if(click%2==0)
  {
    loop();
  }
  else
  {
    noLoop();
  }
}

