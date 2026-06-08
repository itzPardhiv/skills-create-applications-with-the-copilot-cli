const calc = require('../calculator');

describe('basic calculator operations', () => {
  test('addition', () => {
    expect(calc.addition(2, 3)).toBe(5);
    expect(calc.addition('10', 4)).toBe(14);
  });

  test('subtraction', () => {
    expect(calc.subtraction(10, 4)).toBe(6);
    expect(calc.subtraction('5', '2')).toBe(3);
  });

  test('multiplication', () => {
    expect(calc.multiplication(45, 2)).toBe(90);
    expect(calc.multiplication('3', 3)).toBe(9);
  });

  test('division', () => {
    expect(calc.division(20, 5)).toBe(4);
    expect(() => calc.division(1, 0)).toThrow('Division by zero');
  });
});
