// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//phone
test('checks 000-000-0000 to be a phone number', () => {
    expect(isPhoneNumber('000-000-0000')).toBe(true);
});
test('checks 888-888-8888 to be a phone number', () => {
    expect(isPhoneNumber('888-888-8888')).toBe(true);
});
test('checks 000 000 0000 to not be a phone number', () => {
    expect(isPhoneNumber('000 000 0000')).toBe(false);
});
test('checks 888 888 8888 to not be a phone number', () => {
    expect(isPhoneNumber('888 888 8888')).toBe(false);
});

//email
test('checks dogsRkewl@gmail.com to be a valid email', () => {
    expect(isEmail('dogsRkewl@gmail.com')).toBe(true);
});
test('checks catsRawesOme@hotmail.com to be a valid email', () => {
    expect(isEmail('catsRawesOme@hotmail.com')).toBe(true);
});
test('checks FoxesRNimble.com to not be a valid email', () => {
    expect(isEmail('FoxesRNimble.com')).toBe(false);
});
test('checks RatsRSmart@bob to not be a valid email', () => {
    expect(isEmail('RatsRSmart@bob')).toBe(false);
});

//strong password
test('checks RatC3ntral_ to be a strong password', () => {
    expect(isStrongPassword('RatC3ntral_')).toBe(true);
});
test('checks sNAKE3_0nToP_ to be a strong password', () => {
    expect(isStrongPassword('sNAKE3_0nToP_')).toBe(true);
});
test('checks hihello123 to be a bad password', () => {
    expect(isStrongPassword('hihello123)')).toBe(false);
});
test('checks bdaydate!! to be a bad password', () => {
    expect(isStrongPassword('bdaydate!!)')).toBe(false);
});

//date
test('checks 5/3/2026 to be a valid date', () => {
    expect(isDate('5/3/2026')).toBe(true);
});
test('checks 07/21/2026 to be a valid date', () => {
    expect(isDate('07/21/2026')).toBe(true);
});
test('checks 5/3/26 to not be a valid date', () => {
    expect(isDate('5/3/26')).toBe(false);
});
test('checks 07/21/26 to not be a valid date', () => {
    expect(isDate('07/21/26')).toBe(false);
});

//hex color
test('checks #5e457e to be a valid hex color', () => {
    expect(isHexColor('#5e457e')).toBe(true);
});
test('checks #7e6484 to be a valid hex color', () => {
    expect(isHexColor('#7e6484')).toBe(true);
});
test('checks b0acb to not be a valid hex color', () => {
    expect(isHexColor('b0acb')).toBe(false);
});
test('checks #1f1e2 to not be a valid hex color', () => {
    expect(isHexColor('#1f1e2')).toBe(false);
});
