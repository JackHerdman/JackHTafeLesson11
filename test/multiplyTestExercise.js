const { expect } = require("chai");
const { MultiplyNumbers } = require("../src/Common/MultiplyNumbers");

describe("testing the numbers module", () => {
    describe("testing the MultiplyNumbers function", () => {
        it("should return the product of two numbers", () => {
            expect(MultiplyNumbers(10, 5)).to.eql(50);
        });
        it("should handle decimal numbers", () => {
            expect(MultiplyNumbers(10.5, 5)).to.eql(52.5);
        });
        it("should handle negative numbers", () => {
            expect(MultiplyNumbers(-10, 5)).to.eql(-50);
        });
        it("should throw error if either parameter is a not a number", () => {
            expect(() => MultiplyNumbers("A", "B")).to.throw();
            expect(() => MultiplyNumbers(10, "B")).to.throw();
            expect(() => MultiplyNumbers("A", 5)).to.throw();
        });
        it("should work for strings if they can be parsed as numbers", () => {
            expect(MultiplyNumbers("10", 5)).to.eql(50);
            expect(MultiplyNumbers("10.5", 5)).to.eql(52.5);
            expect(MultiplyNumbers("-10", 5)).to.eql(-50);
        });
        it("should throw an error when no numbers are passed in", () => {
            expect(() => MultiplyNumbers()).to.throw();
        });
        it("should throw an error when one number is passed in", () => {
            expect(() => MultiplyNumbers()).to.throw();
        });

    });
});