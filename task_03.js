/*3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
 */



a = 0;
b = 4;

if (a >= 0 && b >= 0) {           //если a и b положительные, вывести их разность;
    console.log(a - b)
} else if (a < 0 && b <0) {     //если а и b отрицательные, вывести их произведение;
    console.log(a * b)
} else {                        //если а и b разных знаков, вывести их сумму
    console.log(a + b)
}

