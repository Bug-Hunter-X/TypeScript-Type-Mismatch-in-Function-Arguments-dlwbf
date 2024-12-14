# TypeScript Type Mismatch Bug

This repository demonstrates a common type error in TypeScript where a function is called with arguments of the wrong type. The `add` function expects two numbers but is called with a string and a number, leading to a type error. The solution involves adding type guards or type checking to ensure the function is called with the correct types. 

## How to reproduce
1. Clone the repository
2. Run `tsc bug.ts`
3. Observe the compiler error