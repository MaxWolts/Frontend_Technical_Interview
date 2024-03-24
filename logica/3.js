/*
 Dado un array de números enteros positivos, donde cada uno
 representa unidades de bloques apilados, debemos calcular cuantas unidades
 de agua quedarán atrapadas entre ellos.
 
 - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
 
   💧💧💧🪣💧💧
   💧💧💧🪣💧💧
   🪣💧💧🪣💧💧
   🪣💧🪣🪣💧🪣
   🪣💧🪣🪣💧🪣
   🪣💧🪣🪣🪣🪣

   ---ejemplo---
         ⏹
         ⏹
   ⏹💧💧⏹
   ⏹💧⏹⏹💧⏹
   ⏹💧⏹⏹💧⏹
   ⏹💧⏹⏹⏹⏹
 
   Representando bloque con 🪣︎ y agua con 💧, quedarán atrapadas 7 unidades
   de agua. Suponemos que existe un suelo impermeable en la parte inferior
   que retiene el agua.
 */

const waterBlocks = (value) => {
  let water = 0;
  let wall = 0;
  let nextWall = 0;

  for (let index = 0; index < value.length -1; index++) {
    const blocks = value[index];

    if (nextWall <= blocks) {
      nextWall = Math.max(...value.slice(index+1));
    }

    const referenceWall = nextWall > wall ? wall : nextWall;
    const currentBlocks = referenceWall - blocks;
    water += currentBlocks >= 0 ? currentBlocks : 0;
    wall = blocks > wall ? blocks : wall;
  }

  return water;
};

//se cambia el 0 del ejemplo ya que se esta trabajando con números enteros positivos segun el enunciado.
console.log(waterBlocks([4, 1, 3, 6, 1, 3]));