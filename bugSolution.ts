function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input types");
    return 0;
  }
}

const result1 = addSafe(10, 20); // Valid: 30
const result2 = addSafe("hello", 10); // Error handled: 0