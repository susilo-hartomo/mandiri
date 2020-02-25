/* 

Buatlah sebuah function `nesting` yang menerima parameter berupa object literal flat.

Fungsi ini akan merubah object tersebut menjadi bentuk nested, contoh:

{
  'nama.depan': 'Muhammad',
  'nama.belakang': 'Yusuf,
}
Berubah menjadinesting

{
  nama: {
    depan: 'Muhammad',
    belakang: 'Yusuf'
  }
}

caranya adalah ketika ditemukan awalan properti yang sama (sebelum karakter '.') maka akan dibuat properti baru dari
kepala properti tersebut dan berisi object dengan properti ekornya.

Perhatikan test cases yang diberikan dengan baik untuk memahami bentuk output yang diinginkan!!!


RULES:
  - Dilarang menggunakan built-in function apapun selain Object.keys, Object.values.
  - Diperbolehkan menggunakan operator typeof.
*/

function titik(arr) {
    let hasil = []
    let temp = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '.') {
            temp += arr[i]
        } else {
            hasil.push(temp)
            temp = ''
        }
    }
    hasil.push(temp)
    return hasil
}

function nesting(object) {
    // your code here
    let hasil = {}
    for (const k in object) {
        let check = false
        for (let i = 0; i < k.length; i++) {
            if (k[i] == '.') {
                let str = titik(k)
                check = true
                if (hasil[str[0]] == undefined) {
                    hasil[str[0]] = {}
                }
                hasil[str[0]][str[1]] =  object[k] 
            }
        }
        if (!check) {
            hasil[k] = object[k]
        }
    }

    return hasil
}

console.log(nesting({
    name: 'Bagus',
    'batch.number': 35,
    'batch.name': 'Infinite Fox'
}))

/* 
{
  name: 'Bagus',
  batch: {
    number: 35,
    name: 'Infinite Fox'
  }
}
*/


console.log(nesting({
    'father.name': 'Suwarno',
    'father.age': 50,
    'mother.name': 'Suwarni',
    'mother.age': 48
}))

/*
{
  father: {
    name: 'Suwarno',
    age: 50
  },
  mother: {
    name: 'Suwarni',
    age: 48
  },
}
*/