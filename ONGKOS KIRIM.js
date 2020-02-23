/*
============
ONGKOS KIRIM
============
ongkosKirim adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:
​
[
  { nama: <nama pengirim>, asal: <asal pengirim>, tujuan: <tujuan pengiriman>, ekspedisi: <nama ekspedisi>},
  { nama: <nama pengirim>, asal: <asal pengirim>, tujuan: <tujuan pengiriman>, ekspedisi: <nama ekspedisi>},
  ...
]
​
Data di atas merupakan campuran seluruh data pengiriman dari berbagai ekspedisi.
​
Kota-kota yang dimiliki perusahaan adalah secara berurut adalah Depok, Jakarta, Bandung, Surabaya, Bali
​
Function akan memproses array of object tersebut untuk membuat sebuah laporan pengiriman dalam bentuk array of object dengan format:
​
[
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan>, durasi: <jumlah durasi pengiriman> },
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan>, durasi: <jumlah durasi pengiriman> },
  ...
]
​
Data yang diharapkan merupakan perhitungan tagihan dan durasi pengiriman dengan ketentuan:
- perjalanan antar kota bernilai 9000/kota
    Ex. dari Depok ke Bandung = Depok >> Jakarta >> Bandung = 2 * 9000 = 18000
    Ex. dari Bali ke Bandung = Bali >> Surabaya >> Bandung = 2 * 9000 = 18000
- Pengiriman dalam kota bernilai 9000
- Untuk pengiriman dengan ekspedisi NJE diskon 10%
- Jika value kota asal atau tujuan tidak ada di dalam daftar kota yang sudah disediakan, maka tagihan 0 dan durasi 0.
- Pengiriman tiap kota berdurasi 1 hari. 
    Ex. dari Depok ke Bandung = Depok >> Jakarta >> Bandung = 2 hari

*/

function ongkosKirim(pengirim) {
    var rutePengiriman = ['Depok', 'Jakarta', 'Bandung', 'Surabaya', 'Bali']

    var hasil = []
    for (let i = 0; i < pengirim.length; i++) {
        var dataPengirim = {}
        var check = true
        for (let j = 0; j < rutePengiriman.length; j++) {
            for (let k = 0; k < rutePengiriman.length; k++) {
                if (pengirim[i].asal == rutePengiriman[j] && pengirim[i].tujuan == rutePengiriman[k]) {
                    if (j == k) {
                        dataPengirim.pengirim = pengirim[i].nama
                        dataPengirim.tagihan = 9000
                        dataPengirim.durasi = 1
                    } else {
                        dataPengirim.pengirim = pengirim[i].nama
                        dataPengirim.tagihan = Math.abs(j - k) * 9000
                        dataPengirim.durasi = Math.abs(j - k)
                        if (pengirim[i].ekspedisi == 'NJE') {
                            dataPengirim.tagihan = Math.abs(j - k) * 9000 * 0.9
                        }
                    }
                    check = false
                }
            }
        }
        console.log('check: ', check); // apa bedanya !check dan check == true
        if (check) {
            dataPengirim.pengirim = pengirim[i].nama
            dataPengirim.tagihan = 0
            dataPengirim.durasi = 0
        }
        hasil.push(dataPengirim)
    }

    return hasil
}

var case1 = [
    { nama: "Jasper", asal: "Depok", tujuan: "Jakarta", ekspedisi: "NJE" },
    { nama: "Kevin", asal: "Jakarta", tujuan: "Surabaya", ekspedisi: "Si Lambat" },
    { nama: "Barry", asal: "Bali", tujuan: "Bandung", ekspedisi: "NJE" }
];

console.log(ongkosKirim(case1));
/*
[
  { pengirim: 'Jasper', tagihan: 8100, durasi: 1 },
  { pengirim: 'Kevin', tagihan: 18000, durasi: 2 },
  { pengirim: 'Barry', tagihan: 16200, durasi: 2 }
]
*/

var case2 = [
    { nama: "Patricia", asal: "Jakarta", tujuan: "Jakarta", ekspedisi: "TnJ" },
    { nama: "Anne", asal: "Medan", tujuan: "Depok", ekspedisi: "NJE" }
];

console.log(ongkosKirim(case2));
/*
[
  { pengirim: 'Patricia', tagihan: 9000, durasi: 1 },
  { pengirim: 'Anne', tagihan: 0, durasi: 0 }
]
*/
