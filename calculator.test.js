const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test('subtracting 1 from 3 should return 2', () => {
        // arrange and act
        const result = mathOperations.diff(3,1);
        // assert
        expect(result).toBe(2)
    });

    test('mulitplying 3 and 7 should return 21', () => {
        // arrange and act
        const result = mathOperations.product(3,7);
        expect(result).toBe(21)
    });
})


