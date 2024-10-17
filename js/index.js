// let genres = ["jazz", "blues"];
// genres.push("Rock-n-roll");

// genres.unshift("Raggie", "Counnrie");

// console.log(genres);

// Ex2

// const values = "8 11";
// const sides = values.split(" ");
// console.log(sides);

// const square = sides[0] * sides[1];
// console.log(square);

// Ex3

// const names = "Ilya, Igor, Shiman, Zahar";
// const phones = "1111111111, 2222222222, 3333333333, 4444444444";

// const namesArray = names.split(", ");

// console.log(namesArray);

// const phonesArray = phones.split(", ");
// console.log(phonesArray);

// for (let i = 0; i < namesArray.length; i += 1) {
//   console.log(`${namesArray[i]} - ${phonesArray[i]}`);
// }

// Ex4

// const string = "Welcome to the future dear time traveler";

// const words = string.split(" ");
// console.log(words);

// for (let i = 0; i < words.length - 1; i += 1) {
//   if (i == 0 || i == words.length - 1) {
//     continue;
//   }
//   console.log(words[i]);
// }

// Ex5

// const langs = ["Pyton", "JavaScript", "C++", "Ruby", "Paskel", "PHP"];
// console.log(langs);
// langs.sort();
// console.log(langs);

// Ex5

const numbers = [2, 17, 94, 1, 23, 37];

let minNumber = numbers[0];

console.log(numbers, minNumber);

for (let item of numbers) {
  if (item < minNumber) {
    minNumber = item;
  }
}
