/*
////////////
Tiket Konser
////////////
Buatlah suatu algoritma untuk pembelian tiket konser.
[INSTRUCTIONS]
1. Peserta konser akan membeli berdasarkan uang yang dia miliki, dan asumsi
akan memilih harga yang paling mahal.
2. Apabila peserta konser memiliki uang yang lebih rendah dari tiket konser,
maka dia akan pulang ke rumah.
3. Harga jenis kursi konser, antara lain:
- VVIP 1000000
- VIP 700000
- Reguler 300000
4. Apabila membeli tiket, tampilkan dalam format [nama]-
[jenis kursi] dan [kembalian]
[RULES]
1. tulis Algoritma juga

    a. cek uang apakah lebih dari 300000
    b. jika tidak tampilakn 'uang anda tidak cukup untuk membeli tiket'
    c. selain itu beli tiket dengan mengisi nama
    d.jika lebih cek uang untuk menenttukan untuk membeli tiket yang mana
    e. jika uang kurang dari 700000 maka dapat membeli tiket reguler
    f. jika uang lebih dari 1000000 maka beli tiket VVIP
    g. selain itu berarti beli tiket VIP
    h. jika sudah terpilih jenis kursi konser maka tampilkan [nama]-
[jenis kursi] dan [kembalian]
*/
/* ================================================================ */

var nama = 'Susilo'
var uang = 800000

//Harga Tiket
var Reguler = 300000
var vip = 700000
var vvip = 1000000

if (uang < 300000) {
    console.log('Maaf uang anda tidak cukup untuk membeli tiker konser');
} else {
    console.log('Selamat anda berhasil membeli tiket')
    if (uang < 700000) {
        console.log('ini tiket nya')
        var kembalian = uang - Reguler
        console.log(`[${nama}] - [Reguler] - [${kembalian}]`)
    } else if (uang > 1000000) {
        console.log('ini tiket nya')
        var kembalian = uang - vvip
        console.log(`[${nama}] - [VVIP] - [${kembalian}]`)
    } else {
        console.log('ini tiket nya')
        var kembalian = uang - vip
        console.log(`[${nama}] - [VIP] - [${kembalian}]`)
    }
}