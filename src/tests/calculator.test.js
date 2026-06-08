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

  test('modulo', () => {
    expect(calc.modulo(5, 2)).toBe(1);
    expect(calc.modulo('10', 3)).toBe(1);
    expect(() => calc.modulo(1, 0)).toThrow('Division by zero');
  });

  test('power', () => {
    expect(calc.power(2, 3)).toBe(8);
    expect(calc.power('3', 3)).toBe(27);
    expect(calc.power(2, 0)).toBe(1);
  });

  test('squareRoot', () => {
    expect(calc.squareRoot(16)).toBe(4);
    expect(calc.squareRoot('9')).toBe(3);
    expect(() => calc.squareRoot(-1)).toThrow('Negative value');
  });
});
