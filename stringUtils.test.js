const reverseString = require('./stringUtils');
test('reverse a string', () => {
    expect(reverseString('Team')).toBe('maeT');
});
test('reverse a string with spaces', () => {
    expect(reverseString('Team Femme')).toBe('emmeF maeT');
});
test('should be able to reverse special characters', () => {
    expect(reverseString('!@#$%^&()')).toBe(')(&^%$#@!');
});