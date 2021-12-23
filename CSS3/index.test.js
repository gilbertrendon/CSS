var fs = require('fs');

describe("Filter function", () => {
  let file;
  beforeAll(() => {
    file = fs.readFileSync('styles.css').toString();
    file = file.replace(/\r?\n|\r| /g, "")
    console.log(file);
  })
  test("check for animation", () => {
    expect(file).toContain('animation:colorchange5sinfinite;');
  });

  test("check 0% and 25% animation", () => {
    expect(file).toContain('0%{background:red;}25%{background:yellow;}');
  });

  test("check 75% and 100% animation", () => {
    expect(file).toContain('75%{background:green;}100%{background:red;}');
  });

  test("check for border radius", () => {
    expect(file).toContain('border-radius:');
  });
});