const isEven = require('./numbers');
test('module of 6 is even', () => {
    expect(isEven(6)).toBe(true);
});
test('module of -6 is even', () => {
    expect(isEven(-6)).toBe(true);
});
test('module of 7 is not even', () =>{
    expect(isEven(7)).toBe(false);
});
test('module of -7 is not even', () =>{
    expect(isEven(-7)).toBe(false);
});