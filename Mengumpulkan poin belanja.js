/**
 * =========================
 * Mengumpulkan poin belanja
 * =========================
 * 
 * Ibu sedang mengumpulan poin belanja dan kita diminta membantunya.
 * Dari list barang yang ingin ibu beli, yang sudah ibu urutkan dari
 * pentingnya barang itu, kumpulkanlah sebanyak mungkin poin belanja
 * dengan modal yang diberikan.
 * 
 * Ibu mau kita membeli barang sesuai dari list ibu. 
 * Jika sudah sampai barang terakhir di list dan 
 * kita masih ada sisa uang, maka kita mulai lagi membeli
 * dari barang pertama di list.
 * 
 * Daftar Harga Barang:
 * | Nama        | Harga        | Poin  |
 * | ----------- | ------------ | ----- |
 * | Shampoo     | Rp    20.000 |  100  |
 * | Sabun       | Rp    10.000 |   90  |
 * | Kompor      | Rp 1.000.000 |   65  |
 * | Bantal      | Rp    25.000 |   20  |
 * | Daging Sapi | Rp   300.000 |   15  |
 * 
 * Jadi saat punya uang Rp. 40.000,-
 * Kita harusnya membeli shampoo 1 dan sabun 2 (bukan shampoo 2)
 * karena kita beli dulu shampoo, lalu sabun, lalu tidak cukup uang untuk
 * barang berikut di list sampai Daging Sapi, baru kita mulai lagi
 * dari beli shampoo
 *
 * Dan saat punya uang Rp. 55.000,-
 * Kita harusnya membeli shampoo 1, sabun 1, dan bantal 1
 */

function belanja(modal) {
    var barang = {}
    barang.Shampoo = { harga: 20000, point: 100 }
    barang.Sabun = { harga: 10000, point: 90 }
    barang.Kompor = { harga: 1000000, point: 65 }
    barang.Bantal = { harga: 25000, point: 20 }
    barang['Daging Sapi'] = { harga: 300000, point: 15 }

    var belanjaan = {}
    belanjaan.belanja = {}
    belanjaan.kembalian = modal
    belanjaan.totalPoint = 0

    while (belanjaan.kembalian >= 10000) {
        for (const k in barang) {
            if (belanjaan.kembalian >= barang[k].harga) {
                if (belanjaan.belanja[k] == undefined) {
                    belanjaan.belanja[k] = 0
                }
                belanjaan.belanja[k]++
                belanjaan.kembalian -= barang[k].harga
                belanjaan.totalPoint += barang[k].point
            }
        }
    }

    if (belanjaan.totalPoint == 0) {
        belanjaan.belanja = 'Kosong'
        return belanjaan
    } else {
        return belanjaan
    }
}



console.log(belanja(100000))
// { belanja: { Shampoo: 2, Sabun: 3, Bantal: 1 },
//   kembalian: 5000,
//   totalPoin: 490 }

console.log(belanja(1000000))
// { belanja: { Shampoo: 7, Sabun: 8, Bantal: 7, 'Daging Sapi': 2 },
//   kembalian: 5000,
//   totalPoin: 1590 }

console.log(belanja(1150500))
// { belanja: { Shampoo: 3, Sabun: 4, Kompor: 1, Bantal: 2 },
//   kembalian: 500,
//   totalPoin: 765 }

console.log(belanja(0))
// {
//   belanja: 'Kosong',
//   kembalian: 0,
//   totalPoin: 0
// }