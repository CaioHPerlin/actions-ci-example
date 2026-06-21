const { somar, multiplicar } = require("./calculadora");

test("Deve somar 2 + 3 e retornar 5", () => {
  expect(somar(2, 3)).toBe(5);
});

test("Deve multiplicar 2 * 3 e retornar 6", () => {
  expect(multiplicar(2, 3)).toBe(6);
});
