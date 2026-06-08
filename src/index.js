#!/usr/bin/env node

// CLI Calculator
// Supported operations:
//  - Addition (+)
//  - Subtraction (-)
//  - Multiplication (*)
//  - Division (/)

const readline = require('readline');

function showHelp() {
  console.log('Usage: calc <num> <op> <num>    e.g. calc 2 + 3');
  console.log('       calc <command> <a> <b>   e.g. calc add 2 3');
  console.log('Operations: +, -, *, / or add, sub, mul, div');
  console.log("Run without args to enter interactive mode.");
}

function compute(a, op, b) {
  const an = Number(a);
  const bn = Number(b);
  if (Number.isNaN(an) || Number.isNaN(bn)) {
    throw new Error('Invalid number');
  }

  switch (op) {
    case '+':
    case 'add':
      return an + bn;
    case '-':
    case 'sub':
      return an - bn;
    case '*':
    case 'x':
    case 'mul':
      return an * bn;
    case '/':
    case 'div':
      if (bn === 0) throw new Error('Division by zero');
      return an / bn;
    default:
      throw new Error('Unsupported operator');
  }
}

function tryComputeFromArgs(argv) {
  // Possible forms:
  // calc 2 + 3  => argv[2]=2 argv[3]=+ argv[4]=3
  // calc add 2 3 => argv[2]=add argv[3]=2 argv[4]=3
  if (argv.length < 5) return null;
  let a, op, b;
  if (['+', '-', '*', '/', 'x'].includes(argv[3]) || ['add','sub','mul','div'].includes(argv[3].toLowerCase())) {
    a = argv[2];
    op = argv[3].toLowerCase();
    b = argv[4];
  } else if (['add','sub','mul','div'].includes(argv[2].toLowerCase())) {
    // calc add 2 3
    op = argv[2].toLowerCase();
    a = argv[3];
    b = argv[4];
  } else {
    return null;
  }

  return compute(a, op, b);
}

function interactive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'calc> '
  });

  console.log('Simple CLI Calculator. Supported: + - * /. Type q or quit to exit.');
  rl.prompt();

  rl.on('line', (line) => {
    const input = line.trim();
    if (!input) return rl.prompt();
    if (input === 'q' || input === 'quit' || input === 'exit') {
      rl.close();
      return;
    }
    if (input === 'help' || input === '-h' || input === '--help') {
      showHelp();
      rl.prompt();
      return;
    }

    // Expect forms like: 2 + 3  or add 2 3
    const parts = input.split(/\s+/);
    try {
      let result;
      if (parts.length === 3) {
        // maybe: a op b or cmd a b
        const [p1, p2, p3] = parts;
        if (['+','-','*','/','x'].includes(p2) || ['add','sub','mul','div'].includes(p2.toLowerCase())) {
          result = compute(p1, p2.toLowerCase(), p3);
        } else if (['add','sub','mul','div'].includes(p1.toLowerCase())) {
          result = compute(p2, p1.toLowerCase(), p3);
        } else {
          throw new Error('Invalid expression');
        }
      } else {
        throw new Error('Invalid input. Use format: 2 + 3 or add 2 3');
      }
      console.log(result);
    } catch (err) {
      console.error('Error:', err.message);
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Goodbye');
    process.exit(0);
  });
}

// Main
try {
  const argv = process.argv;
  if (argv.includes('-h') || argv.includes('--help')) {
    showHelp();
    process.exit(0);
  }

  const maybe = tryComputeFromArgs(argv);
  if (maybe !== null) {
    console.log(maybe);
    process.exit(0);
  }

  // No valid args -> interactive mode
  interactive();
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
