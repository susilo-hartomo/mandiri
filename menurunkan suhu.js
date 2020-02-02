/**
 * =============
 * Panas Jakarta
 * =============
 *
 * [Instruction]
 * Buatlah pseudocode untuk kasus bedikut:
 * Jakarta sedang panas, seorang student phase 0 ingin menurunkan suhu badannya
 * tergantung dari tingginya suhu (dalam celcius) di luar ruangan.
 * 1. Jika suhu <= 26, maka tidak menggunakan kipas atau AC
 * 2. Jika suhu <= 28, maka menggunakan kipas tangan
 * 3. Jika suhu <= 30, maka menggunakan kipas angin
 * 4. Jika suhu > 30, maka menggunakan AC
 *
 * Tampilkan apa yang akan student tersebut lakukan jika suhu udara adalah x?
 */
// Write pseudocode here

/* PSEUDOCODE
SET suhu any number (dalam celcius)
IF suhu <= 26 
    DO tidak menggunakan kipas atau AC
ELSE IF suhu <= 28
    DO tidak menggunakan kipas tangan
ELSE IF suhu <= 30 
    DO tidak menggunakan kipas angin
ELSE 
    DO tidak menggunakan AC
*/

function panas(suhu) {
    if (suhu <= 26) {
        return 'tidak menggunakan kipas atau AC'
    } else if (suhu > 26 && suhu <= 28) {
        return 'tidak menggunakan kipas tangan'
    }
    else if (suhu > 28 && suhu <= 30) {
        return 'tidak menggunakan kipas angin'
    }
    else {
        return 'menggunakan AC'
    }
}

console.log(panas(25))
console.log(panas(27))
console.log(panas(29))
console.log(panas(36))