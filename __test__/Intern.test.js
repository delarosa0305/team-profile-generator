const Intern = require("../lib/Intern.js");

const intern = new Intern('Bahad', 'elementary school');

test("get employee's school", () => {
    expect(intern.getSchool()).toBe('elementary school')
});

test('Employee get the role', () => {
    expect(intern.getRole()).toBe('Intern')
});