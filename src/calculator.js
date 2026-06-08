function toNumber(v) {
  const n = Number(v);
  if (Number.isNaN(n)) throw new Error('Invalid number');
  return n;
}

function addition(a, b) {
  return toNumber(a) + toNumber(b);
}

function subtraction(a, b) {
  return toNumber(a) - toNumber(b);
}

function multiplication(a, b) {
  return toNumber(a) * toNumber(b);
}

function division(a, b) {
  const bn = toNumber(b);
  if (bn === 0) throw new Error('Division by zero');
  return toNumber(a) / bn;
}

function modulo(a, b) {
  const an = toNumber(a);
  const bn = toNumber(b);
  if (bn === 0) throw new Error('Division by zero');
  return an % bn;
}

function power(base, exponent) {
  const b = toNumber(base);
  const e = toNumber(exponent);
  return Math.pow(b, e);
}

function squareRoot(n) {
  const num = toNumber(n);
  if (num < 0) throw new Error('Negative value');
  return Math.sqrt(num);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
