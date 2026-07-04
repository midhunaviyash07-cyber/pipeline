/**
 * Unit Tests for index.js
 */

const { add, subtract, multiply, divide } = require('./index');

describe('Calculator Functions', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should return zero when adding zero', () => {
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 3)).toBe(7);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-2, -3)).toBe(1);
    });

    test('should return zero when subtracting same number', () => {
      expect(subtract(5, 5)).toBe(0);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -2)).toBe(-10);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should divide negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('should handle decimal division', () => {
      expect(divide(10, 4)).toBe(2.5);
    });
  });
});
