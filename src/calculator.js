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

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
