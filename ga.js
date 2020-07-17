function calculateFitness() {
  var currentDistance = Infinity;
  for (var i = 0; i < population.length; i++) {
    var d = calcDistance(locations, population[i]);

    if (d < recordDistance) {
      recordDistance = d;
      bestEver = population[i];
    }
    if (d < currentDistance) {

      currentDistance = d;
      current=currentDistance;
      currentBest = population[i];
    }
    fitnessValue[i] = 1 / (pow(d, 8) + 1);
  }
}


function nextGeneration() {
  var newPopulation = [];
  for (var i = 0; i < population.length; i++) {
    var orderA = pickOne(population, fitnessValue);
    var orderB = pickOne(population, fitnessValue);
    var order = crossOver(orderA, orderB);
    mutate(order, 0.01);
    newPopulation[i] = order;
  }
  population = newPopulation;
}
function normalizeFitness() {
  var sum = 0;
  for (var i = 0; i < fitnessValue.length; i++) {
    sum += fitnessValue[i];
  }
  for (var i = 0; i < fitnessValue.length; i++) {
    fitnessValue[i] = fitnessValue[i] / sum;
  }
}

function mutate(order, mutationRate) {
  for (var i = 0; i < totalLocations; i++) {
    if (random(1) < mutationRate) {
      var indexA = floor(random(order.length));
      var indexB = (indexA + 1) % totalLocations;
      swap(order, indexA, indexB);
    }
  }
}

function crossOver(orderA, orderB) {
  var start = floor(random(orderA.length));
  var end = floor(random(start + 1, orderA.length));
  var neworder = orderA.slice(start, end);
  
  for (var i = 0; i < orderB.length; i++) {
    var city = orderB[i];
    if (!neworder.includes(city)) {
      neworder.push(city);
    }
  }
  return neworder;
}


function pickOne(list, prob) {
  var index = 0;
  var r = random(1);

  while (r > 0) {
    r = r - prob[index];
    index++;
  }
  index--;
  return list[index].slice();
}