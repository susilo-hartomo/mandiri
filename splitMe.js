/*
==================================
Array Mastery: Split Me!
==================================

Diberikan sebuah function splitMe yang menerima 1 parameter berupa string.
Output adalah function tersebut adalah array multidimensi dimana parameter
dipisahkan dari karakter spesial (,), ($) atau (#) kemudian dipisah lagi per-huruf.
Lihatlah contoh berikut untuk melihat polanya

contoh 1:
input: "aqrst,ukaei,ffooo"
output: [ [ 'a', 'q', 'r', 's', 't' ],
          [ 'u', 'k', 'a', 'e', 'i' ],
          [ 'f', 'f', 'o', 'o', 'o' ]

RULES:
  - DILARANG MENGGUNAKAN built in function .split
*/

function splitMe(str) {
    // Write your code here
    var hasil = []
    var temp = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ',') {
            temp.push(str[i])
        } else {
            hasil.push(temp)
            temp = []
        }
    }
    hasil.push(temp)

    return hasil
}

console.log(splitMe("aqrst,ukaei,ffooo"));
/*
[ [ 'a', 'q', 'r', 's', 't' ],
  [ 'u', 'k', 'a', 'e', 'i' ],
  [ 'f', 'f', 'o', 'o', 'o' ] ]
*/
console.log(splitMe("12wq36#787uyr$ffwqsw,trewqi"));
/*

[ [ '1', '2', 'w', 'q', '3', '6' ],
  [ '7', '8', '7', 'u', 'y', 'r' ],
  [ 'f', 'f', 'w', 'q', 's', 'w' ],
  [ 't', 'r', 'e', 'w', 'q', 'i' ] ]
*/
console.log(splitMe("12#787,uyr$ffwq"));
/*
[ [ '1', '2' ],
  [ '7', '8', '7' ],
  [ 'u', 'y', 'r' ],
  [ 'f', 'f', 'w', 'q' ] ]
*/
