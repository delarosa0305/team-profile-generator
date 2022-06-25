const Employee = require("../lib/Employee.js");

const employee = new Employee('Bahad', '74829', 'bahad@gmail.com');

test('get the constructor values for employee object', () => {
    expect(employee.name).toBe('Bahad');
    expect(employee.id).toBe('74829');
    expect(employee.email).toBe('bahad@gmail.com');
})

test("get Employee's name", () => {
    expect(employee.getName()).toBe('Bahad');
});

test('get employee Id', () => {
    expect(employee.getId()).toBe('74829');
})

test('get employee email', () => {
    expect(employee.getEmail()).toBe('bahad@gmail.com')
});

test('Employee get the role', () => {
    expect(employee.getRole()).toBe('Employee')
});