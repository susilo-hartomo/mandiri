function countMakanan(arr) {

    var jajan = {}
    for (let i = 0; i < arr.length; i++) {
        if (jajan[arr[i]] == undefined) {
            jajan[arr[i]] = 0
        }
        jajan[arr[i]]++
    }
    return jajan
}

var list = [
    'Permen', 'Permen', 'Bobba', 'Burger', 'Salad', 'Bobba'
]

console.log(countMakanan(list))
// {
//     Permen: 2,
//     Bobba: 2,
//     Burger: 1,
//     Salad: 1
// }