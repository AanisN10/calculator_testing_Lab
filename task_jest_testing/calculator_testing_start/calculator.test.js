const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test.skip('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test.skip('can add two large positive numbers', () => { 
    expected = 100000;
    actual = sum(20000,80000);
    expect(actual).toBe(expected);
  });

  test.skip('can add two negative numbers', () => {
    expected = -10;
    actual = sum (-7,-3);
    expect(actual).toBe(expected);
  });

  test.skip('can add zero', () => {
    expect(sum(0,0)).toBe(0);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
