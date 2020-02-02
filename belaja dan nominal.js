/**
 * =================
 * Belanja di warung
 * =================
 * 
 * [Description]
 * Ibu meminta tolong kamu untuk belanja di warung.
 * Ibu akan memberikan sejumlah uang dan satu jenis barang yang harus dibeli.
 * Warung tersebut hanya menjual:
 * 1. Wafer seharga 15000
 * 2. Bayam seharga 5000
 * 3. Indomie seharga 2000
 * 
 * [Instruction]
 * Hitunglah berapa barang yang dapat dibeli dengan jumlah uang yang telah
 * diberikan dan sisa kembalian uang jika ada.
 * 
 * [Example]
 * var @belanja = 'wafer'
 * var @uang = 40000
 * 
 * OUTPUT
 * 'Kamu membeli 2 wafer dan memiliki kembalian sebanyak 10000'
 * 
 * Karena ibu memberikan uang 40000 dan ingin membeli wafer. Maka kamu akan mendapatkan 2 wafer
 * (2 x 15000) serta memiliki kembalian 10000.
 * 
 * [Asumsi]
 * - Uang akan selalu lebih besar atau sama dengan dari harga barang yang akan dibeli.
 * - Barang yang dibeli hanya wafer, bayam, atau indomie
 */

function uangBelanja(uang, belanjaan) {
    if (belanjaan == 'wafer') {
        var jmlBarang = Math.floor(uang / 15000)
        var sisaKembalian = uang % 15000
    } else if (belanjaan == 'bayam') {
        var jmlBarang = Math.floor(uang / 5000)
        var sisaKembalian = uang % 5000
    } else {
        var jmlBarang = Math.floor(uang / 2000)
        var sisaKembalian = uang % 2000
    }
    return `Kamu membeli ${jmlBarang} ${belanjaan} dan memiliki kembalian sebanyak ${sisaKembalian}`
}

console.log(uangBelanja(40000, 'wafer'))
console.log(uangBelanja(40000, 'bayam'))
console.log(uangBelanja(40000, 'indomie'))