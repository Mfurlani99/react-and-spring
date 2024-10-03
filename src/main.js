

const suma1 = (g = 0, d = 0) => g + d;

const resultado1 = suma1(2, 3);

const suma2 = (f = 3, j = 45) => f - j;
const resultado2 = suma2(4, 8);

const ejecutar = (fn) => fn(resultado1, resultado2);

ejecutar((a = 0, b = 0) => console.log(a + b));
