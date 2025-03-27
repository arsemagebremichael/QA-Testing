const { add , subtract , multiply , divide } = require('./math');
test('adds 4 + 7 to equal 11', () => {
    expect(add(4, 7)).toBe(11);
});
test('adds -10 + 3 to equal -7', () => {
    expect(add(-10, 3)).toBe(-7);
});
test('adds -10 + -5 to equal -15', () => {
    expect(add(-10, -5)).toBe(-15);
});
test('adds -10 + 10 to equal 0', () => {
    expect(add(-10, 10)).toBe(0);
});
test('adds -10 + -5 to equal -15', () => {
    expect(add(-10, -5)).toBe(-15);
});
//test to subtract
test('suntract 10 - 5 to equal 5', () => {
    expect(subtract(10, 5)).toBe(5);
});
test('suntract 10 - -5 to equal 15', () => {
    expect(subtract(10, -5)).toBe(15);
});
test('suntract -10 - 5 to equal -15', () => {
    expect(subtract(-10, 5)).toBe(-15);
});
test('suntract -10 -- 5 to equal -5', () => {
    expect(subtract(-10, -5)).toBe(-5);
});
//Multiply
test('multiply 3 * 2 to equal 6', ()=>{
    expect(multiply(3,2)).toBe(6);
})
test('multiply 3 * -2 to equal 6', ()=>{
    expect(multiply(3,-2)).toBe(-6);
})
test('multiply 3 * 0 to equal 0', ()=>{
    expect(multiply(3,0)).toBe(0);
})
test('multiply 0 * 0 to equal 0', ()=>{
    expect(multiply(0,0)).toBe(0);
})
//Devide
test('divide  10 /2 to equal 5',() =>{
    expect(divide(10,2)).toBe(5);
})
test('throws an error when dividing by 0', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });
  test('divides -6 by 2 to equal -3', () => {
    expect(divide(-6, 2)).toBe(-3);
  });
test('throws error when dividing with zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});
test('divides 0 by 5 to equal 0', () => {
    expect(divide(0, 5)).toBe(0);
  });
