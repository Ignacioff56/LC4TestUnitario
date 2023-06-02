import { mayorDeEdad } from "./Componente";

describe("funciones dentro del Componente", () => {
  describe("mayorDeEdad", () => {
    test("Si es 18 o mas debe devolver true", () => {
      const result = mayorDeEdad(18);
      expect(result).toBe(true);
    });

    test("Si es menos de 18 debe devolver false", () => {
      const result = mayorDeEdad(17);
      expect(result).toBe(false);
    });

    test("Si la edad es un valor negativo debe dar null", () => {
      const result = mayorDeEdad(-5);
      expect(result).toBe(null);
    });
  });
});
