/**
    *  =======================
    *  RAZIA GANJIL GENAP
    *  =======================
    *
    * [Description]
    * Sebuah fungsi yang akan mengembalikan pemberitahuan kemungkinan tindak pelanggaran
    * jika pengemudi melalui rute-rute tertentu dengan plat ganjil-genap. Pelanggaran akan terjadi apabila
    * ada plat mobil yang melintas pada rute tertentu pada tanggal tertentu dengan nomor plat
    * yang tidak sama dengan aturan ganjil genap
    *
    * [Instructions]
    * 1. Function menerima parameter berupa tanggal, data kendaraan
    * 2. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut)
    * 3. Contoh membaca nomor plat kendaraan adalah misal B 444 XXX, berarti yang dilihat cukup
    * angka paling belakang dari 444 berarti 4, berati nomor plat mobil ini termasuk genap
    * 5. Berlaku hanya untuk MOBIL.
    * 6. Lokasi Ganjil Genap
    *   - Gajah Mada
    *   - Hayam Wuruk
    *   - Sisingamangaraja
    *   - Panglima Polim
    *   - Fatmawati
    *   - Tomang Raya
    *
    * [Rules]
    * 1. tidak boleh menggunakan built in function .filter(), .map(), .reduce(), .includes(), .indexOf()
    */

function kenaRazia(date, data) {
    let listLokasi = ['Gajah Mada', 'Hayam Wuruk', 'Sisingamangaraja', 'Panglima Polim', 'Fatmawati', 'Tomang Raya']

    //write your code here
    function platMobil(plat) {
        var platGenap = 0
        var temp = ''
        for (let i = 0; i < plat.length; i++) {
            if (plat[i] !== ' ') {
                temp += plat[i]
            } else {
                platGenap = temp
            }
        }
        if (Number(platGenap[platGenap.length - 1]) % 2 == 0) {
            return true
        } else {
            return false
        }
    }

    function checkHari(number) {
        if (number % 2 == 0) {
            return true
        } else {
            return false
        }
    }

    var dataTilang = []
    if (date >= 0 && date <= 31) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].type == 'Mobil' && platMobil(data[i].plat) !== checkHari(date)) {
                // console.log(data[i].type);
                // console.log(data[i].plat);
                var namaPelanggar = {
                    name: '',
                    tilang: 0
                }
                for (let j = 0; j < data[i].rute.length; j++) {
                    for (let k = 0; k < listLokasi.length; k++) {
                        // console.log(data[i].rute);
                        if (listLokasi[k] == data[i].rute[j]) {
                            if (namaPelanggar.name == '') {
                                namaPelanggar.name = data[i].name
                                namaPelanggar.tilang = 1
                            } else if (namaPelanggar.name == data[i].name) {
                                namaPelanggar.tilang++
                            }
                        }
                    }
                }
                // console.log(namaPelanggar);
                dataTilang.push(namaPelanggar)
            }
        }
    } else {
        return 'tanggal salah'
    }
    return dataTilang
}


console.log(kenaRazia(27, [{
    name: 'Denver',
    plat: 'B 2791 KDS',
    type: 'Mobil',
    rute: ['TB Simatupang', 'Panglima Polim', 'Depok', 'Senen Raya']
},
{
    name: 'Toni',
    plat: 'B 1212 JBB',
    type: 'Mobil',
    rute: ['Pintu Besar Selatan', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang']
},
{
    name: 'Stark',
    plat: 'B 444 XSX',
    type: 'Motor',
    rute: ['Pondok Indah', 'Depok', 'Senen Raya', 'Kemang']
},
{
    name: 'Anna',
    plat: 'B 678 DD',
    type: 'Mobil',
    rute: ['Fatmawati', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang', 'Gajah Mada']
},
]))
// [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]


// CARA MAS BUDI
function kenaRazia(date, data) {
    let listLokasi = ['Gajah Mada', 'Hayam Wuruk', 'Sisingamangaraja', 'Panglima Polim', 'Fatmawati', 'Tomang Raya']
    ///tentukan hari ganjil/ genap
    var hari = ''
    if (date % 2 == 1) {
        hari = 'ganjil'
    }
    else {
        hari = 'genap'
    }

    var angka = '1234567890'
    var hasil = []

    for (var i = 0; i < data.length; i++) {
        var platNo = ''
        var platHari = ''

        ///ambil nomornya
        for (var j = 0; j < data[i].plat.length; j++) {
            for (var a = 0; a < angka.length; a++) {
                if (data[i].plat[j] === angka[a]) {
                    platNo += angka[a]
                }
            }
        }

        //tentukan plat ganjil/genap
        if (platNo % 2 == 1) {
            platHari = 'ganjil'
        }
        else {
            platHari = 'genap'
        }

        //jika hari(ganjil/genap) tidak sama dengan plat(ganjil/genap)
        if (platHari !== hari) {
            for (r = 0; r < data[i].rute.length; r++) {
                for (l = 0; l < listLokasi.length; l++) {
                    if (data[i].rute[r] === listLokasi[l]) {
                        var cek = false;
                        for (var h = 0; h < hasil.length; h++) {
                            if (hasil[h].name === data[i].name) {
                                hasil[h].tilang += 1
                                cek = true;
                            }
                        }

                        if (!cek) {
                            hasil[h] = {
                                name: data[i].name,
                                tilang: 1
                            }
                        }
                    }
                }
            }
        }
    }

    return hasil;
}


console.log(kenaRazia(27, [{
    name: 'Denver',
    plat: 'B 2791 KDS',
    type: 'Mobil',
    rute: ['TB Simatupang', 'Panglima Polim', 'Depok', 'Senen Raya']
},
{
    name: 'Toni',
    plat: 'B 1212 JBB',
    type: 'Mobil',
    rute: ['Pintu Besar Selatan', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang']
},
{
    name: 'Stark',
    plat: 'B 444 XSX',
    type: 'Motor',
    rute: ['Pondok Indah', 'Depok', 'Senen Raya', 'Kemang']
},
{
    name: 'Anna',
    plat: 'B 678 DD',
    type: 'Mobil',
    rute: ['Fatmawati', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang', 'Gajah Mada']
},
]))
// [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]