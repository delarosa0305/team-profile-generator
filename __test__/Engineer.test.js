const Engineer = require("../lib/Engineer.js");

const engineer = new Engineer('Bahad', '74829', 'bahad@gmail.com', 'bahad24');

test("get Employee's name", () => {
    expect(engineer.getName()).toBe('Bahad');
});

test('get employee Id', () => {
    expect(engineer.getId()).toBe('74829');
})

test('get employee email', () => {
    expect(engineer.getEmail()).toBe('bahad@gmail.com')
});

test("get employee's github account", () => {
    expect(engineer.getGithub()).toBe('bahad24')
});

test('Employee get the role', () => {
    expect(engineer.getRole()).toBe('Engineer')
});
