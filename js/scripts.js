/*Objetos

1. Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."*/
console.log("Ejercicio1");

const user = {
  name: "John",
  surname: "Doe",
  age: 25,
  hobbies: ["leer", "tocar la guitarra", "pasear con las cabras"],
  pets: [
    { name: "Max", type: "perro" },
    { name: "Whiskers", type: "gato" },
  ],
  address: {
    street: "123 Main Street",
    city: "Gotham",
    state: "California",
    postalCode: "12345",
    country: "USA",
  },
  phone: "+1234567890",
  email: "johndoe@example.com",
  occupation: "Ingeniero de software",
  education: "Master en ciencia de datos",
};

console.log(
  ` Me llamo ${user.name} ${user.surname}, tengo ${user.age} años. Me gusta ${user.hobbies[2]} junto con mis mascotas ${user.pets[0].name} y ${user.pets[1].name} en ${user.address.state}.
  Actualmente he terminado un ${user.education} y estoy buscando empleo como ${user.occupation}, pueden contactarme por mail a ${user.email} o por teléfono al número ${user.phone}.`
);

/* Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.*/
console.log("Ejercicio2");
const datos = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: [],
    },
    thirdFloor: {
      numbersDouble: [],
    },
  },
  fourthFloor: {
    numbersDividedBy2: [],
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: [],
  },
};

for (const numero of datos.numbers) {
  datos.firstFloor.secondFloor.numbersPlus2.push(numero + 2);
  datos.firstFloor.thirdFloor.numbersDouble.push(numero * 2);
  datos.fourthFloor.numbersDividedBy2.push(numero / 2);
  if (numero % 2 === 0) {
    datos.fifthFloor.onlyEven.push(numero);
  } else {
    datos.fifthFloor.onlyOdd.push(numero);
  }
}
console.log(`Números +2: ${datos.firstFloor.secondFloor.numbersPlus2}`);
console.log(`Números x2: ${datos.firstFloor.thirdFloor.numbersDouble}`);
console.log(`Números divididos por 2: ${datos.fourthFloor.numbersDividedBy2}`);
console.log(`Números pares: ${datos.fifthFloor.onlyEven}`);
console.log(`Números impares: ${datos.fifthFloor.onlyOdd}`);

/*Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String*/

console.log("Ejercicio 3");

const dataStrings = {
  firstFloor: {
    vowels: [], // Vocales
  },
  secondFloor: {
    consonants: [], // Consonantes
  },

  fourthFloor: {
    asciiCode: [], // Ascii code de cada letra
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [], // Palabras de la frase en mayúsculas
    wordsInLowercase: [], // Palabras de la frase en minúsculas
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto, será útil que investigues sobre el método replaceAll de los strings y sobre el uso de expresiones regulares dentro de este método.

    // REGLAS DE CODIFICACIÓN
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: "",
  },
};

const dataFill = (frase) => {
  for (letras of frase) {
    const vocales = ["a", "e", "i", "o", "u"];
    if (letras.includes[vocales]) {
      dataStrings.firstFloor.vowels.push(letras[vocales]);
    } else {
      dataStrings.firstFloor.vowels.push(letras);
    }
  }
};

dataFill("Si no estudias acabarás como Enrique");
console.log(`Vocales: ${dataStrings.firstFloor.vowels}`);

/*10.Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.  */
console.log("Ejercicio 10");
const vocalMayus = (word) => {
  const vocals = ["a", "e", "i", "o", "u"];
  let newWord = "";
  for (const letter of word) {
    if (vocals.includes(letter)) {
      newWord = newWord + letter.toUpperCase();
    } else newWord = newWord + letter;
  }

  console.log(newWord);
};

vocalMayus("culo");
