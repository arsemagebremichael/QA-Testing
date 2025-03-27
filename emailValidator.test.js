const isValidEmail = require("./ emailValidator");


test('should accept this email format', () => {
    expect(isValidEmail('adeday@gmail.com')).toBe(true);
});
test('should accept email with dots in username', () => {
    expect(isValidEmail('edith.muthai@domain.co')).toBe(true);
});
test('should accept minimal valid email', () => {
    expect(isValidEmail('e@m.c')).toBe(true);
});
test('should accept email with numbers', () => {
    expect(isValidEmail('mahado45@domain.com')).toBe(true);
});
test('should reject email with no domain', () => {
    expect(isValidEmail('arsema@')).toBe(false);
});
test('should reject email with no username', () => {
    expect(isValidEmail('@example.com')).toBe(false);
});
test('should reject email with space instead of @', () => {
    expect(isValidEmail('jeniffer domain.com')).toBe(false);
});
test('should reject email with multiple @ symbols', () => {
    expect(isValidEmail('dorothy@@domain.com')).toBe(false);
});
test('should reject empty string', () => {
    expect(isValidEmail('')).toBe(false);
});
test('should reject email with no TLD', () => {
    expect(isValidEmail('mahado@domain')).toBe(false);
});