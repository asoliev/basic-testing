import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 3, b: 2, action: Action.Subtract, expected: 1 },//subtract two numbers
    { a: 2, b: 3, action: Action.Multiply, expected: 6 },//multiply two numbers
    { a: 6, b: 2, action: Action.Divide, expected: 3 },//divide two numbers
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },//exponentiate two numbers
    { a: 1, b: 2, action: null, expected: null },//return null for invalid action
    { a: null, b: 2, action: Action.Add, expected: null },//return null for invalid arguments
];

describe('simpleCalculator', () => {
  test.each(testCases)('run all testCases', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a: a, b: b, action: action })).toBe(expected);
  });
});
