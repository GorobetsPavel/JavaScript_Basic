//  1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let prime_numbers = [2];
let i = 3;

while (i <= 100) {
    if (i % 2 != 0) {
        let j = 3;
        while (j * j <= i && i % j != 0) {
            j += 2
        }
        if (j * j > i) {
            prime_numbers.push(i);
            //console.log(i);
        }
    }
    i++;      
}

console.log(prime_numbers);