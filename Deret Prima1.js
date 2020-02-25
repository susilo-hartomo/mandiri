/**
 * ===========
 * Deret Prima
 * ===========
 * Diberikan sebuah function prime yang menerima satu parameter bertipe number.
 * Output dari function ini adalah mengembalikan deret angka prima dari 0 sampai angka itu sendiri
 * ke dalam sebuah array
 *
 * CONTOH CASE
 * ======
 *
 * input: 10
 * output: [ 2, 3, 5, 7 ]
 * proses:
 *   angka 1 bukan prima
 *   angka 2 adalah prima -> maka masuk ke dalam deret
 *   angka 3 adalah prima -> maka masuk ke dalam deret
 *   angka 4 bukan prima
 *   angka 5 adalah prima -> maka masuk ke dalam deret
 *   angka 6 bukan prima
 *   angka 7 adalah prima -> maka masuk ke dalam deret
 *   angka 8 bukan prima
 *   angka 9 bukan prima
 *   angka 10 bukan prima
 * maka output adalah [ 2, 3, 5, 7 ]
 */

function prime(num) {

    let hasil = []
    for (let i = 2; i <= num; i++) {
        let check = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                check = false
            }
        }
        if (check) {
            hasil.push(i)
        }
    }
    return hasil
}

console.log(prime(10)); // [ 2, 3, 5, 7 ]
console.log(prime(27)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23]
console.log(prime(30)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(prime(41)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41 ]