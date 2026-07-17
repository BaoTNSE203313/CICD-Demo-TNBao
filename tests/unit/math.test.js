const { add, subtract, multiply } = require('../../src/math');

describe('Math functions', () => {
  // 1. Nhóm test các phép tính cơ bản
  describe('Basic operations (Happy Path)', () => {
    it('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should subtract two numbers correctly', () => {
      expect(subtract(5, 2)).toBe(3);
    });

    it('should multiply two numbers correctly', () => {
      expect(multiply(4, 5)).toBe(20);
    });
  });

  // 2. Nhóm test các trường hợp đặc biệt (Edge Cases)
  describe('Edge cases', () => {
    it('should handle negative numbers in addition', () => {
      expect(add(-2, 5)).toBe(3);
      expect(add(-5, -5)).toBe(-10);
    });

    it('should handle multiplication with zero', () => {
      expect(multiply(100, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    it('should handle negative numbers in multiplication', () => {
      expect(multiply(-3, 4)).toBe(-12);
      expect(multiply(-3, -3)).toBe(9);
    });

    it('should handle floating point math correctly', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });
});