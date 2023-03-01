const Car = function(manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
};

const cars = [
    {manufacturer: "Audi", price: 32_000, engineType: "diesel"},
    {manufacturer: "Honda", price: 25_000, engineType: "gasoline"},
    {manufacturer: "Toyota", price: 30_000, engineType: "hybrid"},
    {manufacturer: "Ford", price: 28_000, engineType: "diesel"},
    {manufacturer: "BMW", price: 50_000, engineType: "gasoline"},
    {manufacturer: "Tesla", price: 70_000, engineType: "electric"},
    {manufacturer: "Audi", price: 45_000, engineType: "gasoline"},
    {manufacturer: "Chevrolet", price: 32_000, engineType: "hybrid"},
    {manufacturer: "Nissan", price: 27_000, engineType: "gasoline"},
    {manufacturer: "Kia", price: 24_000, engineType: "electric"},
    {manufacturer: "Mazda", price: 26_000, engineType: "gasoline"},
    {manufacturer: "Ford", price: 25_000, engineType: "gasoline"},
    {manufacturer: "Toyota", price: 30_000, engineType: "hybrid"},
    {manufacturer: "Ford", price: 28_000, engineType: "diesel"},
    {manufacturer: "BMW", price: 50_000, engineType: "gasoline"},
    {manufacturer: "Tesla", price: 70_000, engineType: "electric"},
    {manufacturer: "Audi", price: 45_000, engineType: "gasoline"},
    {manufacturer: "Ford", price: 32_000, engineType: "hybrid"},
    {manufacturer: "Nissan", price: 27_000, engineType: "gasoline"},
    {manufacturer: "Kia", price: 24_000, engineType: "electric"},
    {manufacturer: "Ford", price: 26_000, engineType: "gasoline"}
]

module.exports = {Car, cars}


