/*
=====================
Max Subset Sum
=====================
[INSTRUCTION]
Diberikan sebuah function yang menerima parameter array bilangan bulat. Dimana
function ini berfungsi untuk mengembalikan jumlah maksimum dari dua buah nilai
yang dijumlahkan didalam array tersebut
[EXAMPLE]
- Bila array adalah [-2, 1, 3, -
4, 5], maka nilai maksimum adalah 8 karena dua nilai yang
dapat menghasilkan nilai maksimum adalah 3 + 5
[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
3. dilarang menggunakan map, filter, reduce, apply
*/

var x = [-2, 1, 3, -4, 5]
var y = []
for (let i = 0; i < x.length; i++) {
    if (i == 0) {
        y.push(x[i])
    }
    else {
        if (y[0] < x[i]) {
            y[0] = x[i]
        }
    }
}

for (let i = 0; i < x.length; i++) {
    if (i == 0) {
        y.push(x[i])
    } else {
        if (y[1] < x[i] && x[i] < y[0]) {
            y[1] = x[i]
        }
    }
}
console.log(y)
console.log(y[0] + y[1])



//MENCARI NILAI 2 TERBESAR DENGAN
function nilaiTerbesar(x) {
    var y = 0
    for (let i = 0; i < x.length; i++) {
        if (i == 0) {
            y += x[i]
        }
        else {
            if (y < x[i]) {
                y = x[i]
            }
        }
    }
    return y
}

for (let i = 0; i < 2; i++) {
    nilai2Terbesar = []
    nilai2Terbesar.push(nilaiTerbesar(x))

    xBaru = []
    for (let j = 0; j < x.length; j++) {
        if (x[j] !== nilai2Terbesar[0]) {
            xBaru.push(x[j])
        }
    }

    nilai2Terbesar.push(nilaiTerbesar(xBaru))
}
console.log();
console.log('nilai 2 terbesar dari fungsi');
console.log(nilai2Terbesar);
console.log('Jumlah 2 nilai terbesar');
console.log(nilai2Terbesar[0] + nilai2Terbesar[1]);
