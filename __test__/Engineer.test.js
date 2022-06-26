const Engineer = require("../lib/Engineer.js");

const engineer = new Engineer('Bahad', 'bahad24');

test("get employee's github username", () => {
    expect(engineer.getGithub()).toBe('bahad24')
});

test('Employee get the role', () => {
    expect(engineer.getRole()).toBe('Engineer')
});
