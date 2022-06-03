// практика из теории 16 недели 
// arrays of theoretical material

// const years = [1920, 1924, 1928, 1932, 1936];


// let fruits = ["Яблоко", "Апельсин", "Слива"];

// alert( fruits[0] ); // Яблоко
// alert( fruits[1] ); // Апельсин
// alert( fruits[2] ); // Слива

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// alert( fruits.length );    // Длина - 3
// alert( fruits[2] );        // "Слива" - 2


// for (let i = 0; i < 3; i++) { 
//     // выведет 0, затем 1, затем 2
//         alert(i);
//     }

// let sum = 0;

// for(;;) {

//     let value = +prompt("Введите число", '');

//     if (!value) break; 

//     sum += value;

// }
// alert( 'Сумма: ' + sum );

// let elements = document.querySelectorAll('ul > li:last-child');
// 	console.log(elements);

// бесконечный цикл while
// let theNumber = prompt("Пожалуйста, введите число от 1 до 10.");  
// while (theNumber < 1 || theNumber > 10 || isNaN(theNumber))  
// {  
//     theNumber = prompt("Введено неправильное значение, пожалуйста, введите число от 1 до 10!");  
// }  

// alert("Отлично! Вы ввели число: " + theNumber);

// цикл прерывный с while
// let counter = 0;  

// while (counter < 10)  
// {  
//     counter = counter + 1;  
//     console.log("The counter is currently at: " + counter);  
// }

// const array = new Array(5);
// alert(array);

// вывод четных чисел 
// for (let i = 2; i < 10; i++) {
//     if (i % 2 == 0) {
//     alert( i );
//     }
// }


// поиск инпутов 
// let elements = document.querySelectorAll('input');
// console.log(elements);

// ввод числа и прерывание на кэнсел
// let sumInput = 0;
// while (c = parseFloat(prompt("Введите число:")))
// {
//     sumInput += c;

// }
// alert("Сумма = " + sumInput); 

// практическое задание 1 

function sumInput() {

    let numbers = [];

    while (true) {

    let value = prompt("Введите число", 0);


    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
    }

alert( sumInput() );

// практические задачи под номер 3 в дз.
// 1. Дан массив ['js', 'css', 'html']. Выведите на экран первый элемент.

// let frontend = ['js', 'css', 'html'];
// alert( frontend[0] );

// 2. Отфильтруйте массив [0, 1, false, 2, undefined, '', 3, null] от нежелательных значений, таких как false, undefined, пустые строки, ноль, null с помощью метода filter.  Ожидаемый результат: [1, 2, 3].
//     const arr = [0, 1, false, 2, undefined, '', 3, null]; {
//     const array = arr.filter(element => Boolean(element));
//     console.log(array);
// }

// 4. Дан массив `[[1,2], [1,2,3], [1,2,3,4]]`. Найдите индекс массива, длина которого `> 3`
// let massiv = [
//     [1,2], 
//     [1,2,3], 
//     [1,2,3,4]
// ]; 
// console.log(massiv.findIndex( element => element.length > 3 ))
// massiv.findIndex( element => element.length > 3 );

