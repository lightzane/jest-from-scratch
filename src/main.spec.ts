import { fibonacci, sum } from "./main";

describe('main', () => {
    describe('sum()', () => {
        it('should return a number', () => {
            expect.assertions(2);
            const result = sum(1, 2, 3, 4, 5);
            expect(typeof result).toEqual('number');
            expect(result).toEqual(15);
        });
    });

    describe('fibonacci', () => {
        it('should return a list of number', () => {
            expect.assertions(2);
            const result = fibonacci(0, 1);
            expect(typeof result).toEqual('object'); // array is considered as object
            expect(result.length).toEqual(10);
        });
        it('should have a 7th number and when multiplied by 11 should equal to the sum of all numbers in the result', () => {
            const result = fibonacci(52, 87);
            expect(result[6] * 11).toEqual(sum(...result));
        });
    });
});