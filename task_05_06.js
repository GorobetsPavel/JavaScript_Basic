/* 
5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
    В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).*/


function addition (a, b) {
    return a + b;    
}

function subtraction (a, b) {
    return a - b;    
}

function multiplication (a, b) {
    return a * b;    
}

function division (a, b) {
    return a / b;    
}

function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2); 
        case "/":
            return division(arg1, arg2);            
    }

}

a = 7;
b = 4;

console.log(addition(a,b));
console.log(mathOperation(a,b,"+"));

console.log(subtraction(a,b));
console.log(mathOperation(a,b,"-"));

console.log(multiplication(a,b));
console.log(mathOperation(a,b,"*"));

console.log(division(a,b));
console.log(mathOperation(a,b,"/"));