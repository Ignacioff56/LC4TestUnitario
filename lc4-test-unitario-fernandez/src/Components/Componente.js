export function mayorDeEdad(age) {
  if (age < 0) {
    return null;
  }

  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

const Componente = () => {};

export default Componente;
