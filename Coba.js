
var n = 4
var hasil = []
for (let i = n; i >= 1; i--) {
    var temp = []
    for (let j = 1; j <= n ; j++) {
        console.log(i);
        console.log(j);

        if (i > j) {
            temp.push(' ')
        } else {
            temp.push(j-i+1)
        }
    }
    console.log(temp);
    hasil.push(temp)
}
console.log('hasil: ', hasil);



// function deepSum(arr) {
//     // Code disini 
//     var tampung = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             for (let k = 0; k < arr[i][j].length; k++) {
//                 tampung += arr[i][j][k]
//             }
//         }
//     }
//     console.log('tampung: ', tampung);
//     return tampung
// }

// //TEST CASE
// console.log(deepSum([
//     [
//         [4, 5, 6],
//         [9, 1, 2, 10],
//         [9, 4, 3]
//     ],
//     [
//         [4, 14, 31],
//         [9, 10, 18, 12, 20],
//         [1, 4, 90]
//     ],
//     [
//         [2, 5, 10],
//         [3, 4, 5],
//         [2, 4, 5, 10]
//     ]
// ])); // 316

