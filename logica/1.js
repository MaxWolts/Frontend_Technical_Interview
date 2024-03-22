// Debes escribir un programa que encuentre la frecuencia con que aparecen los distintos caracteres (letras y números) dentro de una cadena de texto. El resultado se devuelve una matriz de objetos. Cada uno de estos objetos tiene 2 campos: carácter (caracter) y número de veces que aparece (veces). La matriz estará ordenada por el campo carácter. No se diferencia entre mayúsculas y minúsculas ni entre vocales acentuadas.

// Ejemplo:

// contarCar("Hoy ya es día 10")

// deberá devolver:

// {car: '0', veces: 1}
// {car: '1', veces: 1}
// {car: 'a', veces: 2}
// {car: 'd', veces: 1}
// {car: 'e', veces: 1}
// {car: 'h', veces: 1}
// {car: 'i', veces: 1}
// {car: 'o', veces: 1}
// {car: 's', veces: 1}
// {car: 'y', veces: 2}

const contarCar = (value) => {
  const charCounter = {};
  const normalizedString = value.toLowerCase().replace(/[^a-z0-9ñ]/g, '');
  //si no se cuenta la Ñ usar la siguiente linea en lugar de la anterior.
  // const normalizedString = value.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (const char of normalizedString) {
    charCounter[char] = (charCounter[char] || 0) + 1;
  };

  const matriz = Object.entries(charCounter).map(([char, veces]) => ({
    car: char,
    veces,
  }));

  const result = matriz.sort((a, b) => a.car.localeCompare(b.car));

  return result;

};

const text = "Hoy ya es día 10, mañana es 11 y pasado mañana 12";
console.log(contarCar(text));