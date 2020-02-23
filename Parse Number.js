/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/
console.log('hello')

function parseNumber(equation) {
  let angka = String(equation)
  // console.log('angka: ', angka);
  if (equation < 10) {
    return angka
  } else {
    let nilai = Number(angka[0]) * (10 ** (angka.length - 1))
    // console.log('nilai: ', nilai);
    return (`${nilai}+` + parseNumber(equation - nilai)).split('+0').join('')
  }
}

console.log(parseNumber(3333)); // 3000+300+30+3
console.log(parseNumber(90)); // 90 
console.log(parseNumber(2333)); // 2000+300+30+3
console.log(parseNumber(2033)); // 2000+300+30+3

