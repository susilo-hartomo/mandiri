function angkaPrima(angka) {
    var check = true
    for (let i = 2; i < angka; i++) {
        if (angka % i == 0) {
            check = false
        }
    }
    if (check == false) {
        return false
    } else {
        return true
    }

}
function angkaPrimaRange(num) {
    var temp = []
    for (let i = 2; i < num; i++) {
        if (angkaPrima(i) == true) {
            temp.push(i)
        }
    }
    return temp
}
// TEST CASES
console.log(angkaPrimaRange(6)); // [ 1, 2, 3, 5 ]
console.log(angkaPrimaRange(33)); // [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]'