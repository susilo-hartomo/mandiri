// Left Rotation array
// Buatlah sebuah fungsi yang menerima dua parameter. Parameter pertama adalah array yang akan kita manipulasi dan parameter kedua adalah angka berapa kali kita akan melakukan rotasi. Fungsi ini akan menggeser ke kiri posisi dari array sebanyak angka putaran yang kita kirimkan.

function leftRotation(array, count) {

    for (let i = 0; i < count; i++) {
        var temp = array[0]
        for (let j = 0; j < array.length - 1; j++) {
            array[j] = array[j + 1]
        }
        array[array.length - 1] = temp
        // console.log(j);
        // console.log(array, '==============>');
    }
    return array
}

console.log(leftRotation([0, 1, 2, 3, 4, 5], 1)) // [ 1, 2, 3, 4, 5, 0]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 2)) // [ 2, 3, 4, 5, 0, 1 ]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 3)) // [ 3, 4, 5, 0, 1, 2 ]