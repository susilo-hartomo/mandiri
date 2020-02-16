/*
=================
FIND EMPTY SEAT
=================

[INSTRUCTION]
Terdapat function findEmptySeat , function ini akan memberikan daftar tempat duduk yang kosong sesuai dengan row yang diinput user.
Terdapat 2 parameter yang pertama adalah array multidimensi yang berisi list tempat duduk, tempat duduk yang telah di booking ditandai dengan huruf X.
Parameter kedua adalah row yang ingin dicari user ('ditandai dengan huruf kapital') .

[EXAMPLE]
param 1 :
[
  ['ROW', '1', '2', '3', '4', '5', '6'],
  ['A', 'X', 'X', 'X', 'X', ' ', ' '],
  ['B', ' ', 'X', ' ', ' ', ' ', ' '],
  ['C', 'X', 'X', 'X', 'X', ' ', ' '],
  ['D', ' ', ' ', ' ', 'X', 'X', 'X'],
]
param 2 :
D
output :
Terdapat 3 bangku kosong, D1, D2, D3

[RULES]
- dilarang menggunakan indexof, includes

*/
function findEmptySeat(params1, params2) {
  var kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  var index = 0
  for (let k = 0; k < kamus.length; k++) {
    if (params2 == kamus[k]) {
      index += k
    }
  }
  console.log(index);

  for (let j = 0; j < params1[index + 1].length; j++) {
    if (params1[index+1][j]==' ') {
      
      console.log(`${kamus[index]}${j}`);
    }
  }
}

var param1 =
  [
    ['ROW', '1', '2', '3', '4', '5', '6'],
    ['A', 'X', 'X', 'X', 'X', ' ', ' '],
    ['B', ' ', 'X', ' ', ' ', ' ', ' '],
    ['C', 'X', 'X', 'X', 'X', ' ', ' '],
    ['D', ' ', ' ', ' ', 'X', 'X', 'X'],
  ]
findEmptySeat(param1, 'D')