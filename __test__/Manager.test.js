const Manager = require("../lib/Manager.js");

const manager = new Manager('Bahad', '74829', 'bahad@gmail.com', '(386) 659-1474');

test("get Employee's name", () => {
    expect(manager.getName()).toBe('Bahad');
});

test('get employee Id', () => {
    expect(manager.getId()).toBe('74829');
})

test('get employee email', () => {
    expect(manager.getEmail()).toBe('bahad@gmail.com')
});

test('get employee office number', () => {
    expect(manager.getOfficeNumber()).toBe('(386) 659-1474')
}) 

test('Employee get the role', () => {
    expect(manager.getRole()).toBe('Manager')
});