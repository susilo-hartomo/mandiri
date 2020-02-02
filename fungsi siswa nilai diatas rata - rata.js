// MEMBUAT FUNCTION MENCARI SISWA MENDAPAT NILAI LEBIH DARI RATA-RATA
var N = [3, 4, 5, 6, 7, 7]
var M = ['a', 'b', 'c', 'd', 'e', 'f']
function siswaDiatasRatarata(a, b) {
    jml = 0
    for (let i = 0; i < a.length; i++) {
        jml += a[i]
    }
    rataRata = jml / a.length

    namaSiswa = ''
    for (let i = 0; i < a.length; i++) {
        if (a[i] > rataRata) {
            namaSiswa += b[i]
        }
    }
    return namaSiswa
}

console.log(siswaDiatasRatarata(N, M))