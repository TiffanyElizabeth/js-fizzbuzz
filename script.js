// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// 1. loop min 1 max 100 (for)
// 2. se e divisibile da 3 e da 5, deve essere divisibile da 15 - se il numere e divisibile da 15, stampa FizzBuzz
// 3. se e divisibile da 5, stampa "Buzz" al posto del numbero
// 4. se e divisibile da 3, stampa "Fizz" al posto del numero
// 5. altrimenti stampa il numero 

for(let i=1; i<101; i++) {
    if(i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}