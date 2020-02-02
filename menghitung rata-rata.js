console.log('\n')
console.log('Latihan rata-rata')
var TN = 0
var N = [3, 4, 5, 6, 7, 7]
var M = ['a', 'b', 'c', 'd', 'e', 'f']

for (i = 0; i < N.length; i++) {
    TN += N[i]
}

// console.log(TN)

var R = TN / (N.length - 1)

var index = []
// console.log(R)
for (i = 0; i < N.length; i++) {
    if (N[i] > R) {
        index.push(i)
    }
}
console.log('Daftar Nama siswa')
console.log(M)
console.log('Daftar Nilai siswa')
console.log(N)
console.log('Nilai rata-rata siswa ' + R)
console.log('')
console.log('Nama siswa yang nilai lebih dari rata-rata')

for (var i = 0; i < index.length; i++) {
    console.log(M[index[i]] + ' Nilai nya adalah : ' + N[index[i]])
}



// MEMBUAT FUNCTION MENCARI SISWA MENDAPAT NILAI LEBIH DARI RATA-RATA
var N = [3, 4, 5, 6, 7, 7]
var M = ['a', 'b', 'c', 'd', 'e', 'f']
function siswaDiatasRatarata(a, b) {
    jml = 0
    for (let index = 0; index < a.length; index++) {
        jml += a[index]
    }
    rataRata = jml / a.length

    namaSiswa = ''
    for (let i = 0; i < a.length; i++) {
        if (a[i] > jml) {
            namaSiswa += b[i]
        }
    }
    return namaSiswa
}

console.log(siswaDiatasRatarata(N, M))