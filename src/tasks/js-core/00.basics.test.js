const {
  sum,
  safeSum,
  max,
  min,
  isInteger,
  roundNumber,
  percentage
} = require('./00-basics');

describe('test basics', () => {
  test('sum', () => {
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(-1, -2, 3)).toBe(0);
  });

  test('safeSum', () => {
    expect(safeSum(1, 2, 3)).toBe(6);
    expect(safeSum('-1', '-2', 3)).toBe(0);
    expect(safeSum('a', '-2', 3)).toBe(1);
    expect(safeSum('a', 'b', null)).toBe(0);
  });

  test('min', () => {
    expect(min(1, 2, 3)).toBe(1);
    expect(min(-1, -2, 3)).toBe(-2);
  });

  test('max', () => {
    expect(max(1, 2, 3)).toBe(3);
    expect(max(-1, -2, -3)).toBe(-1);
  });

  test('isInteger', () => {
    expect(isInteger(5)).toBe(true);
    expect(isInteger(5.5)).toBe(false);
  });

  test('roundNumber', () => {
    expect(roundNumber(5.5555, 3)).toBe(5.556);
    expect(roundNumber(7.456, 2)).toBe(7.46);
  });

  test('percentage', () => {
    expect(percentage([1, 1, 1, 1])).toEqual([0.25, 0.25, 0.25, 0.25]);
    expect(percentage([10, 10])).toEqual([0.5, 0.5]);
  });
});
