/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string

  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/

function heroes(nama) {
    temp = ''
    hero = []
    for (let i = 0; i < nama.length; i++) {
        if (nama[i] == '&') {
            hero.push(temp)
            temp = ''
            i++
        } else {
            temp += nama[i]
        }
    }
    hero.push(temp)

    // pahlawan = []
    // for (let i = 0; i < hero.length; i++) {
    //     for (var j = i+1; j < hero.length-(i+1); j++) {
    //         if (hero[i] == hero[j]) {

    //         } else {
    //             pahlawan.push(hero[i])
    //         }
    //     }

    // }
    // return pahlawan
    return hero
}

var input = "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
console.log(heroes(input));
namaHero = heroes(input)
console.log(namaHero[1]);
console.log(namaHero[2] == namaHero[3]);

