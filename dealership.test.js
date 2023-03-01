const {Dealership} = require('./dealership');
const {Car} = require('./car');

let dealership;
let car;

beforeEach(() =>{
    dealership = new Dealership("Aya & Wilson Car Dealership", 25);
    car = new Car({manufacturer: "Tesla", price: 70_000, engineType: "electric"});
});

describe('dealership tests',()=>{
    test("can count cars in stock", () => {
        const expected = 0;
        const actual = dealership.countCars();
        expect(actual).toBe(expected);
    });

    test("can add car to stock", () => {
        dealership.addCars(car);
        const expected = 1;
        const actual =  dealership.countCars();
        expect(actual).toBe(expected);
    });

    test("can return an array containing all car manufacturers", () => {
        const honda = new Car("Honda", 30_000, "electric");
        dealership.addCars(honda);

        const toyota = new Car("Toyota", 55_000, "diesel");
        dealership.addCars(toyota);

        const expected = new Set([honda, toyota]);
        const actual = dealership.returnManufacturers();
        expect(actual).toStrictEqual(expected);
        //.toStrictEqual - checks if a subject is equal to a value (including undefined, properties)
        // essentially checks values are the same before storing them
    });

    test("can find car by manufacturer", () => {
        const tesla = new Car("Tesla", 70_000, "electric");
        dealership.addCars(tesla);
        dealership.addCars(car);
        
        const honda = new Car("Honda", 30_000, "electric");
        dealership.addCars(honda);

        const toyota = new Car("Toyota", 55_000, "diesel");
        dealership.addCars(toyota);

        const expected = [honda, toyota, tesla];
        const actual = dealership.carsByManufacturer("Honda");
        expect(actual).toStrictEqual(expected);
    });

    test("sum of total car values", () => {
        const honda = new Car("Honda", 30_000, "electric");
        dealership.addCars(honda);

        const toyota = new Car("Toyota", 55_000, "diesel");
        dealership.addCars(toyota);

        const expected = 85_000;
        const actual = dealership.carsTotalValue();
        expect(actual).toBe(expected);
    });


});
