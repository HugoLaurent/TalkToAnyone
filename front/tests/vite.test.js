// tests/example.test.js
import { describe, it, expect } from 'vitest';
import { sum } from '../sum';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(0, 0)).toBe(0);
  });

  it('should return NaN when one of the arguments is not a number', () => {
    expect(sum(1, 'a')).toBeNaN();
    expect(sum(null, 1)).toBeNaN();
  });
});
