const {Car, cars} = require('./car');

describe('car', () => {
    test("can access car manufacturer property", () => {
        //Arrange
        const expected = "Audi";
        //Act
        const actual = cars[0].manufacturer;
        //Assert
        expect(actual).toBe(expected);
    });

    test("can access price property", () => {
        const expected = 28_000;
        const car = new Car("Ford", 28_000, "diesel");
        const actual = car.price;
        expect(actual).toBe(expected);
    });

    test("can access engine type property", () => {
        const expected = "diesel";
        const actual = cars[3].engineType;
        expect(actual).toBe(expected);
    });
});