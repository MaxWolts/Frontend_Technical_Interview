/*
 Los primeros dispositivos móviles tenían un teclado llamado T9
 con el que se podía escribir texto utilizando únicamente su
 teclado numérico (del 0 al 9).

 Crea una función que transforme las pulsaciones del T9 a su
 representación con letras.
 - Debes buscar cuál era su correspondencia original
 - Cada bloque de pulsaciones va separado por un guión.
 - Si un bloque tiene más de un número, debe ser siempre el mismo.
 - Ejemplo:
     Entrada: 6-666-88-777-33-3-33-888
     Salida: MOUREDEV
 */

const t9Keyboard = (value) => {
  let result = "";
  const t9ToLetter = {
    '1': ',.?!',
    '2': 'ABC', '3': 'DEF', '4': 'GHI',
    '5': 'JKL', '6': 'MNO', '7': 'PQRS',
    '8': 'TUV', '9': 'WXYZ', '0': " ",
  };
  const lettersArray = value.split("-");

  lettersArray.forEach(element => {
    let position = element.length;
    const t9ElementLength = t9ToLetter[element[0]].length;

    //si se apreta más veces el número de opciones disponibles, vuelve a comenzar desde la primera opcion.
    while (position > t9ElementLength) {
      position = position - t9ElementLength;
    }

    position--;
    result += t9ToLetter[element[0]][position];
  });

  return result;
};

console.log(t9Keyboard("6-666-88-777-33-3-33-888-00000-44444444-666666-555-2-11111111-1111-1111"));