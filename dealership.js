
const Dealership = function(name, maximumCars){
    this.name = name;
    this.maximumCars = maximumCars;
    this.carsInStock = [];
}


// Count the number of cars in stock
Dealership.prototype.countCars = function(){
    return this.carsInStock.length;
}

// Add a car to stock
Dealership.prototype.addCars = function(car){
    this.carsInStock.push(car);
    return this.carsInStock;
}

// Return an array containing each car's manufacturer
Dealership.prototype.returnManufacturers = function(){
    return new Set (this.carsInStock.map(c => c.manufacturer),[])
}


// Find all the cars from a given manufacturer
Dealership.prototype.carsByManufacturer = function(manufacturer){
    return this.carsInStock.filter(c => c.manufacturer === manufacturer);
}


// Find the total value of all the cars in stock
Dealership.prototype.carsTotalValue = function(){
    return this.carsInStock.reduce((total, car) => total + car.price, 0);
}


module.exports = {Dealership}