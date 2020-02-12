/*
SELECT OPTION
Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dar
i
array hasil kelipatan dari keynya.
Fungsi akan menerima parameter berupa array dan key yang ingin dicari.
EXAMPLE
INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
MEDIAN: 4
OUTPUT: 4 adalah nilai median dari array di process
INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
MEDIAN: (3 + 4)/2
OUTPUT: 3.5 adalah nilai tengah dari array di process
RULES:
1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift
()
2. WAJIB menggunakan PSEUDOCODE
*/

var array = [3, 6, 4, 2, 7, 4, 5, 3, 1, 5, 1]
var key = 1

//MENGURUTKAN NILAI TERBESAR
function mengurutkanNilai(nilai) {
    terurut = nilai
    for (let i = 0; i < nilai.length; i++) {
        temp = 0
        for (let j = 0; j < nilai.length; j++) {
            if (terurut[i] < terurut[j]) {
                temp += terurut[i]
                terurut[i] = terurut[j]
                terurut[j] = temp
                temp = 0
            }
        }
    }
    return terurut
}

console.log(mengurutkanNilai(array));
array = mengurutkanNilai(array);

// MENCARI NILAI MEDIAN
function kelipatanMedian(array, key) {
    kelipatan = []
    median = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % key == 0) {
            kelipatan.push(array[i])
        }
    }

    if (kelipatan.length % 2 == 0) {
        median += kelipatan[kelipatan.length / 2]
        median += kelipatan[(kelipatan.length / 2) - 1]
        median = median / 2

    } else {
        median += kelipatan[(kelipatan.length - 1) / 2]
    }
    return median
}


console.log('Median data diatas adalah');
console.log(kelipatanMedian(array, key));
