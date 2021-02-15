const Engineer = require("../lib/Engineer");

const engineer = new Engineer("Dave",1,'engineer@gmail.com','bhumisha')
test('Create Testcase for Engineer Object' , () => {
    expect(engineer.github).not.toBeNull();
})

test('getGithub' , () => {
    expect(engineer.getGitHub()).not.toBeNull();
})

test('getRole' , () => {
    expect(engineer.getRole()).toBe('Engineer');
})