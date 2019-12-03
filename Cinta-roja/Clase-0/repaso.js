// const variable01 = "valor";
// // let variable03 = "valor"
// // variable03 = 4567890


// // let string = "Textoo"
// // let Number = 1234567
// // let Boolean = true || false
// // let undefined = undefined
// // let nulo = null
// // let Symbol = Symbol(true)


// function cualquiera(params) {
//     var otra = 123456789

//         function otra23(params) {

//         }
// }

// cualquiera()

// console.log(cualquiera())

// var a = 7;
// var b = 12;
// if (a === 7) {
//     let a = 4;
//     b = 1;
//     console.log("Dentro del if: " + a + " - " + b);
// }
// console.log("Fuera del if: " + a + " - " + b);

// let datos = ["asdflkñjsad", 123456, true]

// function convertGrades(inputValue) {
//     inputValue = inputValue * 9 / 5 + 32;
//     return inputValue;
// }
// console.log(convertGrades(25));

// function Conv() {
//     let grados = 25;
//     if (grados != null) {
//         let resultado = (grados * 9 / 5) + 32;
//         console.log(+resultado + " grados Farenheit");
//     }
// }
// Conv();

// function celciusToFarenheit(celciusValue) {
//     if (celciusValue != null) {
//         let resultado = (grados * 9 / 5) + 32;
//         return resultado;;
//     } else {
//         return "Ingresa el valor en centígrados"
//     }
// }

// // celciusToFarenheit()

// let CelsiusToFahrenheit = function(celsius) {
//     return celsius * 9 / 5 + 32;
// }

// let myArray = [67, 54, 23, 87, 94];
// let getParse;
// let getSortArray;
// ​
// function getArrayMedia(getArray) {
//     getSortArray = getArray.sort();
//     getParse = parseInt(getSortArray.length / 2);
//     return getSortArray[getParse];
// }
// ​
// console.log(getArrayMedia(myArray));

function promedioAndMedia(list) {
    let sum = 0;
    let numbers = list.length;
    //orden
    for (i = 0; i < numbers - 1; i++) {
        for (j = i + 1; j < numbers; j++) {
            if (list[i] > list[j]) {
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    console.log('Lista ordenada');
    console.log(list);
    //media
    console.log('Media');
    if (list % 2 != 0) {
        console.log(list[parseInt(numbers / 2)]);
    } else {
        console.log(list[parseInt(numbers / 2) - 1] + list[parseInt(numbers / 2)] / 2)
    }
    console.log('Promedio');
    //Promedio
    for (i = 0; i < list.length; i++) {
        sum += list[i];
    }
    console.log(sum / numbers);
}
console.log(promedioAndMedia([2, 4, 56, 65, 32, 11]));