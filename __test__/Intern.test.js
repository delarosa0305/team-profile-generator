const Intern = require("../lib/Intern.js");

const intern = new Intern('Bahad', '74829', 'bahad@gmail.com', 'elementary school');

test("get Employee's name", () => {
    expect(intern.getName()).toBe('Bahad');
});

test('get employee Id', () => {
    expect(intern.getId()).toBe('74829');
})

test('get employee email', () => {
    expect(intern.getEmail()).toBe('bahad@gmail.com')
});

test("get employee's school", () => {
    expect(intern.getSchool()).toBe('elementary school')
});

test('Employee get the role', () => {
    expect(intern.getRole()).toBe('Intern')
});