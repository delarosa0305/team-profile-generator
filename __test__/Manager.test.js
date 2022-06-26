const Manager = require("../lib/Manager.js");

const manager = new Manager('Bahad', 3);

test('get employee office number', () => {
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
}) 

test('Employee get the role', () => {
    expect(manager.getRole()).toBe('Manager')
});