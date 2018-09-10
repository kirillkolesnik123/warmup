
let assert = require('assert');
let warmup = require('./src/index.js');
function FtoC (z){
  return z * 9/5 +32;
}

describe('warmup', () => {
  it('warm cold', () => {
    const fahrenheit = (-20);
    assert.deepEqual(FtoC(fahrenheit),-4);
  });

  it('warm cool', () => {
    const fahrenheit = (0);
    assert.deepEqual(FtoC(fahrenheit), 32);
  });

  it('warm medium', () => {
    const fahrenheit = (15);
    assert.deepEqual(FtoC(fahrenheit), 59);
  });

  it('warm hot', () => {
    const fahrenheit = (40);
    assert.deepEqual(FtoC(fahrenheit), 104);
  });
});
