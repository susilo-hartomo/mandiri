/*
=================
TUG OF WAR WINNER
=================
Name : Andreas Sosilo
[INSTRUCTIONS]
Tug of War adalah sebuah function yang menerima string sebagai tarik tambang anta
ra 2 belah pihak
Kamu harus bisa menentukan pemenang dari permainan tarik tambang ini dengan cara
mengukur kekuatan setiap pemain
Kekuatan pemain ada 3 Level
- A = 1
- B = 2
- C = 3
Sisi dengan kekuatan terbanyak akan menang dan jika kekuatannya sama maka hasilny
a akan draw
[CONSTRAINTS]
Tidak ada batasan untuk soal ini.
[EXAMPLE]
tugOfWar('ABCA--V--ABCC')
Skor team kiri: 7
Skor team kanan: 9
output: Team KANAN Menang!
[Tulis PSEUDOCODE di bawah ini]
// Nilai tidak valid (0) jika logic dan PSEUDOCODE berbeda!
// Tidak harus formal pseudocode, tapi paling tidak jelaskan step by step logikan
ya
*/

var tugOfWar = 'ABCA--V--ABCC'

function menang(versus) {
    kanan = 0
    kiri = 0
    temp = 0

    for (let i = 0; i < versus.length; i++) {
        switch (versus[i]) {
            case 'A':
                temp += 1
                break;

            case 'B':
                temp += 2
                break

            case 'C':
                temp += 3
                break

            case 'V':
                kiri += temp
                temp = 0
                break
        }
    }
    kanan += temp

    console.log(`Skor team KIRI : ${kiri}`)
    console.log(`Skor team KANAN : ${kanan}`)
    console.log('')
    if (kiri > kanan) {
        return 'Tim KIRI menang!'
    } else {
        return 'Tim KANAN menang!'
    }
}

console.log(menang(tugOfWar));
