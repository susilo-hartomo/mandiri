/** dari start ke end berapa langkah (langkah bisa diagonal)
 * ===================
 * Every Step You Take
 * ===================
 * 
 * [Description]
 * steps merupakan sebuah function yang menghitung jarak langkah antara titik start 's' dan end 'e'.
 * function menerima sebuah array multidimensional berisikan array of spasi, dan 2 diantaranya adalah s dan e.
 * 
 * [Instruction]
 * Buatlah function steps agar dapat menghitung jumlah langkah minimal yang dapat ditempuh
 * oleh 's' hingga sampai ke 'e'. Range langkah yang dapat diambil tiap turn adalah 1 ke delapan arah
 * (vertikal, horizontal, diagonal).
 * 
 * [Example]
 * @input = [
 *   [' ', ' ', 's'],
 *   [' ', ' ', ' '],
 *   ['e', ' ', ' '],
 * ]
 * karena 's' dapat melangkah diagonal, maka 's' hanya butuh 2 langkah:
 * langkah 1 : [
 *   [' ', ' ', ' '],
 *   [' ', 's', ' '],
 *   ['e', ' ', ' '],
 * ]
 * langkah 2 : [
 *   [' ', ' ', ' '],
 *   [' ', ' ', ' '],
 *   ['s', ' ', ' '],
 * ]
 * maka @output = 2
 * 
 * Rules:
 * 1. tidak boleh menggunakan indexOf, lastIndexOf, includes, some, every, find, findIndex
 * 2. tidak boleh map, forEach, filter, reduce
 */

function steps(arr) {


    let koordinatE = []
    let koordinatS = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 'e') {
                koordinatE.push(i, j)
            }
            if (arr[i][j] == 's') {
                koordinatS.push(i, j)
            }
        }
    }

    let jarakX = Math.abs(koordinatS[0] - koordinatE[0])
    let jarakY = Math.abs(koordinatS[1] - koordinatE[1])

    if (jarakY > jarakX) {
        return jarakY
    } else {
        return jarakX
    }
}

let a1 = [
    [' ', ' ', ' ', ' ', ' ', ' ', 'e', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 10 ????
    [' ', 's', ' ', ' ', ' ', ' ', ' ', ' '],
]
console.log(steps(a1)) // 5

let a2 = [
    [' ', ' '],
    [' ', 's'],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    ['e', ' '],
    [' ', ' '],
    [' ', ' '],
]
console.log(steps(a2)) // 10

let a3 = [
    [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['s', ' ', ' ', ' ', ' ', ' ', ' '],
]
console.log(steps(a3)) // 6