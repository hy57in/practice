const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(x, a);
const addX = (x) => (a) => add(x, a);
const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);


// => ((x * 2) * 3) + 4
const formula = x => addFour(multiplyThree(multiplyTwo(x)));

// => ((x + 4) * 3) * 2
const formulaB = x => multiplyTwo(multiplyThree(addFour(x)));

// 커링이란, 함수의 인자를 다시 구성하여 필요한 함수를 만드느 패턴