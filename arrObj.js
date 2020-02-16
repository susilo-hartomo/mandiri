// console.log('Review Week 4')
// Definisi Object
//  Tipe data yang bisa menampung beberapa value dan memiliki key dan value

// var ayu = {
//     name: 'Ayu sudi'
// }

// console.log(ayu.name)
// var x = 'name'

// console.log(ayu[x])

// ayu['Tempat Lahir'] = 'Jakarta'

// var number = 1
// var gender = 'female'
// ayu[number] = 2
// ayu['gender'] = 'female'

// var nol = 0
// ayu[nol] = 0



// console.log(ayu)

// for (key in ayu) {
//     if ('name' in ayu) {
//         console.log('helooo')
//     } 

// }

// if ('name' in ayu) {
//     console.log('helooo')
// }  


// Mencari 5 besar nilai tertinggi
// function getTop(number, list) {
//     var arrScore = []
//     for (i in list) {
//         arrScore.push([list[i], i])
//     }

//     for (i = 0; i < arrScore.length; i++) {
//         for (j = 0; j < arrScore.length; j++) {
//             if (arrScore[i][0] > arrScore[j][0]) {
//                 var temp = arrScore[j]
//                 arrScore[j] = arrScore[i]
//                 arrScore[i] = temp
//             }
//         }
//     }

//     var result = []
//     for (i = 0; i < number; i++) {
//         result.push(arrScore[i][1])
//     }
    
//     return result
// }

// var a = {
//     akbar: 92,
//     gio: 100,
//     aron: 55,
//     raka: 60,
//     zahra: 12,
//     rara: 82,
//     alvin: 5,
//     dea: 102,
//     adam: 86,
//     susilo: 89,
// }

// console.log(getTop(5, a))


// Mencari 5 besar dengan nilai rata2 terbesar
// function getTopV2(number, list) {
//     var arr = []
//     for (k in list) {
//         var total = 0
//         for (i = 0; i < list[k].length; i++) {
//             total += list[k][i]
//         }
//         var rata2 = total / list[k].length
//         arr.push([rata2, k])
//     }

//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j <= i; j++) {
//             if (arr[i][0] > arr[j][0]) {
//                 var temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     var result = []
//     for (i = 0; i < number; i++) {
//         result.push(arr[i][1])
//     }
    
//     return result
// }

// var batch41 = {
//     tomo: [1,20,30,4,5],
//     siti: [1,20,3,4,5],
//     dodi: [1,40,30,4,5],
//     junadi: [1,2,3,4,5],
//     rohaye: [1,23,3,4,5],
//     lila: [13,25,30,32,51],
//     jaja: [1,2,21,4,5]
// }

// console.log(getTopV2(5, batch41))

// function groupByHobi(arr) {

// }

var pikachu = {
    color: 'yellow',
    kuping: 2,
    mata: 2,
    listrik: true
}

function hasOwnProperty(obj, check) {
    for (k in obj) {
        if (k == check) {
            return true
        }
    }
    return false
}

console.log(hasOwnProperty(pikachu, 'kuping')) // true
console.log(hasOwnProperty(pikachu, 'age')) // false