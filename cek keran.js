/*
=======================
INVENTARIS KERAN MASJID
=======================
[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string ,
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu
[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output :
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'
input: 'XX?XX?XX^XX'
output:
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'
input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'
input : 'XX?XX?XX'
output :
'Semua keran rusak'
[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr
// YOUR PSEUDOCODE/ALGORITHM HERE
*/

var masjid = 'XX^XX^XX^XX^XX'

function cekKeran(keran) {
    var jumlahKeran = 0;
    var keranBaik = []
    var keranRusak = []
    for (var i = 0; i < keran.length; i++) {
        if (keran[i] == '^') {
            jumlahKeran++
            keranBaik.push((i + 1) / 3)
        } else if (keran[i] == '?') {
            jumlahKeran++
            keranRusak.push((i + 1) / 3)
        }
    }

    var jmlKeranBaik = keranBaik.length
    var jmlKeranRusak = keranRusak.length

    console.log(`Jumlah keran ada sebanyak ${jumlahKeran}`)
    console.log(`Jumlah keran baik ada sebanyak ${jmlKeranBaik}`)
    console.log(`Jumlah keran rusak ada sebanyak ${jmlKeranRusak}`)

    if (jumlahKeran == jmlKeranBaik) {
        console.log('Semua Keran berjalan dengan baik')
    } else if (jumlahKeran == jmlKeranRusak) {
        console.log('Semua keran rusa')
    } else {
        console.log(`jumlah keran ada sebanyak ${jumlahKeran} keran baik ${jmlKeranBaik} keran rusak ${jmlKeranRusak}`)
    }

}

cekKeran(masjid)