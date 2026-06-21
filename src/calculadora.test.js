const { somar } = require("./calculadora");

test("Deve somar 2 + 3 e retornar 5", () => {
  expect(somar(2, 3)).toBe(5);
});
