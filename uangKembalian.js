/**
================
Hitung Kembalian
================
buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 
Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
1. kurangi bayar - harga
2. hitung kembalian dalam pecahan 5000/20000/50000/10000
*/
function hitungKembalian(bayar, harga){
    var uang = {}
    uang.pecahan1 = 100000
    uang.pecahan2 = 50000
    uang.pecahan3 = 20000
    uang.pecahan4 = 10000
    uang.pecahan5 = 5000

    // console.log(uang)
    var uangKembalian = {}
    var kembalian = bayar - harga
    for(var k in uang){
      while(kembalian >= uang[k]){
        if(uangKembalian[uang[k]]===undefined){
          uangKembalian[uang[k]] = 0
        }
        uangKembalian[uang[k]]++
        kembalian -= uang[k]
      }
    }
  return uangKembalian
}
// Test Case
// console.log(hitungKembalian(1000000, 755000));
// /*
// output
//   { 
//     '5000': 1, 
//     '20000': 2, 
//     '100000': 2 
//   }
// */
// // Test Case
// console.log(hitungKembalian(40000, 35000));
// /*
// output
//   { '5000': 1 }
// */
// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/
// // TEST CASE 4
// console.log(hitungKembalian(50000,50000)); // {}
// //TEST CASE 5
// console.log(hitungKembalian(50000,500000)); // Uang tidak cukup