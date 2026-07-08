// Test suite for utility functions
const { add, subtract, multiply, divide, formatDate } = require('./utils');

describe('Math Utilities', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add mixed numbers', () => {
      expect(add(-2, 3)).toBe(1);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(subtract(10, 5)).toBe(5);
    });

    test('should subtract resulting in negative', () => {
      expect(subtract(5, 10)).toBe(-5);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should throw error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });
});

describe('Date Utilities', () => {
  describe('formatDate', () => {
    test('should format date correctly', () => {
      const date = new Date('2026-07-08');
      expect(formatDate(date)).toBe('2026-07-08');
    });

    test('should throw error for invalid date', () => {
      expect(() => formatDate('not a date')).toThrow('Invalid date');
    });
  });
});
