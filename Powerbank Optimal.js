/**
 * =================
 * Powerbank Optimal
 * =================
 * 
 * [Description]
 * Sebuah powerbank memiliki ukuran, daya simpan, dan harga
 * yang berbeda-beda dengan powerbank lainnya. 
 * 
 * Daya simpan powerbank adalah berapa mAh listrik yang disimpan,
 * contohnya: 5000 mAh, 10000 mAh, 3000 mAh.
 * 
 * Ukuran powerbank adalah (lebar x panjang x tebal) dari powerbank tersebut.
 * Untuk kali ini, asumsikan ukurannya ada dalam cm, jadi volume nya akan jadi cm3.
 * 
 * [Instructions]
 * Buatlah function untuk mengecek:
 * 1 - rasio daya simpan dibanding ukuran (volume) sebuah powerbank.
 *     (berapa mAh/cm3)
 * 
 * 2 - rasio harga dibanding daya simpan sebuah powerbank.
 *     (berapa idr/mAh)
 * Bulatkan kedua rasio tersebut ke 1 desimal poin terdekat.
 * 
 * Buat objek baru dengan merk, dua rasio tersebut, dan Grade.
 * 
 * Jika rasio daya simpan / ukuran diatas 100 mAh/cm3,
 * berikan Grade "A" ke powerbank tersebut.
 * Jika rasio daya simpan / ukuran diatas 50 mAh/cm3,
 * berikan Grade "B" ke powerbank tersebut.
 * Jika rasio daya simpan / ukuran diatas 0 mAh/cm3
 * berikan Grade "C" ke powerbank tersebut.
 * Jika rasio tidak ada , jangan berikan grade ke powerbank tersebut.
 * 
 * [Rules]
 * 1. Dilarang menggunakan built-in function: split, slice, splice, join, reverse
 */

function deleteSpace(arr) {

    let hasil = []
    let temp = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != ' ') {
            temp += arr[i]
        } else {
            hasil.push(Number(temp))
            temp = ''
        }
    }
    hasil.push(temp)

    return hasil
}

function checkRatio(powerbank) {

    if (powerbank) {
        hasil = {}
        hasil.merk = powerbank.merk
        let lebar = deleteSpace(powerbank.lebar)
        let panjang = deleteSpace(powerbank.panjang)
        let tebal = deleteSpace(powerbank.tebal)
        let volume = lebar[0] * panjang[0] * tebal[0]
        let mAh = deleteSpace(powerbank.dayaSimpan)
        hasil.mAhToSize = (mAh[0] / volume).toFixed(1) + ' mAh/cm3'
        hasil.priceTomAh = (powerbank.harga / deleteSpace(powerbank.dayaSimpan)[0]).toFixed(1) + ' idr/mAh'

        if (Math.fround(mAh[0] / volume) > 100) {
            hasil.Grade = 'A'
        } else if (Math.fround(mAh[0] / volume) > 50) {
            hasil.Grade = 'B'
        } else if (Math.fround(mAh[0] / volume) > 0) {
            hasil.Grade = 'C'
        }
        return hasil
    } else {
        return 'Invalid Input'
    }
}

var pow1 = {
    lebar: '5 cm',
    panjang: '10 cm',
    tebal: '1 cm',
    dayaSimpan: '7000 mAh',
    merk: 'Hipp0',
    harga: 300000
}
console.log(checkRatio(pow1))
console.log()
// { merk: 'Hipp0',
//   mAhToSize: '140 mAh/cm3',
//   priceTomAh: '42.9 idr/mAh',
//   Grade: 'A' }

var pow2 = {
    lebar: '3 cm',
    panjang: '7 cm',
    tebal: '3 cm',
    dayaSimpan: '3350 mAh',
    merk: 'Anker',
    harga: 270000
}
console.log(checkRatio(pow2))
console.log()
// { merk: 'Anker',
//   mAhToSize: '53.2 mAh/cm3',
//   priceTomAh: '80.6 idr/mAh',
//   Grade: 'B' }


var pow3 = {
    lebar: '15 cm',
    panjang: '20 cm',
    tebal: '2 cm',
    dayaSimpan: '18000 mAh',
    merk: 'Energizer',
    harga: 1512000
}
console.log(checkRatio(pow3))
console.log()
// { merk: 'Energizer',
//   mAhToSize: '30 mAh/cm3',
//   priceTomAh: '84 idr/mAh',
//   Grade: 'C' }

console.log(checkRatio())
// Invalid Input