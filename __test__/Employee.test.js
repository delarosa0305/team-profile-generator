const Employee = require("../lib/Employee.js");

const employee = new Employee('Bahad', 1, 'bahad@gmail.com');

test('get the constructor values for employee object', () => {
    expect(employee.name).toBe('Bahad');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('bahad@gmail.com');
})

test("get Employee's name", () => {
    expect(employee.getName()).toBe('Bahad');
});

test('get employee Id', () => {
    expect(employee.getId()).toEqual(expect.any(Number));
})

test('get employee email', () => {
    expect(employee.getEmail()).toBe('bahad@gmail.com')
});

test('Employee get the role', () => {
    expect(employee.getRole()).toBe('Employee')
});