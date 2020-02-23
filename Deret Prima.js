/**
 * ===========
 * Deret Prima
 * ===========
 * Diberikan sebuah function prime yang menerima satu parameter bertipe number.
 * Output dari function ini adalah mengembalikan sebuah nilai prima yang merupakan
 * deret dari input parameter
 * 
 * CASE 1
 * ======
 * 
 * input: 5
 * output: 3
 * proses:
 *   angka 1 bukan prima
 *   angka 2 adalah prima -> deret ke-1 bilangan prima
 *   angka 3 adalah prima -> deret ke-2 bilangan prima
 *   angka 4 bukan prima
 *   angka 5 adalah prima -> deret ke-3 bilangan prima
 * maka output adalah 3 karena angka 5 merupakan deret ke-3 bilangan prima
 * 
 * CASE 2
 * ======
 * 
 * input: 6
 * output: -1
 * proses:
 *   angka 1 bukan bilangan prima
 *   angka 2 adalah bilangan prima -> deret ke-1 bilangan prima
 *   angka 3 adalah bilangan prima -> deret ke-2 bilangan prima
 *   angka 4 bukan bilangan prima
 *   angka 5 adalah bilangan prima -> deret ke-3 bilangan prima
 *   angka 6 bukan bilangan prima
 * maka output adalah -1 karena angka 6 bukan merupakan bilangan prima
 */

function prime(num) {

    let check = true
    if (num == 1) {
        check = false
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0 ) {
                check = false
            }
            
        }
    }
    return check
}


console.log('prime: ', prime(3));

function isPrime(num) {

    let count = 0
    for (let i = 1; i <= num; i++) {
        if (prime(i) == true) {
            // console.log(i);
            // console.log(prime(i));
            count++
        }
        
    }
    
    if (prime(num) == false) {
        return -1
    } else {
        return count
    }
}


console.log(isPrime(5)); //3
console.log(isPrime(27)); //-1
console.log(isPrime(7)); //4
console.log(isPrime(41)); //13
console.log(isPrime(601)); //110
console.log(isPrime(99)); //-1