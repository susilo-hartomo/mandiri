/*
===========
HASIL UJIAN
===========
Hasil Ujian adalah sebuah fungsi untuk mendapatkan informasi status lulus atau tidak lulus-nya student yang mengikuti ujian
Fungsi ini akan mengembalikan sebuah object dengan jumlah student, nama-nama student yang lolos, nama-nama student yang gagal, nilai tertinggi dan nilai rata-rata student
[RULES]
- Student dinyatakan lulus jika nilainya lebih dari atau sama dengan 70, maka nilai dibawahnya dinyatakan gagal
[RESTRICTION]:
- TIDAK boleh menggunakan built in function max(), filter(), find(), sort()
- TIDAK boleh menggunakan Regex
*/
function hasilUjian(students) {
    // your code here

    if (students.length == 0) {
        return "TIDAK ADA PESERTA UJIAN"
    } else if (typeof students != "object") {
        return "Invalid Input"
    }

    var siswa = {}
    siswa.jumlahSiswa = students.length
    siswa.lulus = []
    siswa.gagal = []
    siswa.nilaiTertinggi = 0

    for (let i = 1; i < students.length; i++) {
        for (let j = 0; j < i; j++) {
            if (students[i].nilai > students[j].nilai) {
                var temp = students[i]
                students[i] = students[j]
                students[j] = temp
            }
        }
    }
    // console.log(students);
    siswa.nilaiTertinggi = students[0].nilai

    var totalNilai = 0
    for (let i = 0; i < students.length; i++) {
        totalNilai += students[i].nilai
    }

    siswa.nilaiAverage = Math.round(totalNilai / students.length)

    for (let i = 0; i < students.length; i++) {
        if (students[i].nilai >= 70) {
            siswa.lulus.push(students[i].nama)
        } else {
            siswa.gagal.push(students[i].nama)
        }
    }

    return siswa
}
console.log(hasilUjian([
    {
        nama: "Arman",
        nilai: 90
    },
    {
        nama: "Budi",
        nilai: 70
    },
    {
        nama: "Caca",
        nilai: 50
    },
    {
        nama: "Dina",
        nilai: 60
    },
    {
        nama: "Erwin",
        nilai: 100
    },
]));
/* OUTPUT:
{
    jumlahStudent: 5,
    lulus: ["Arman", "Budi", "Erwin"],
    gagal: ["Caca", "Dina"]
    nilaiTertinggi: 100,
    nilaiAverage: 74
}
*/
console.log(hasilUjian([
    {
        nama: "Daniel",
        nilai: 23
    },
    {
        nama: "Bima",
        nilai: 69
    },
    {
        nama: "Karim",
        nilai: 97
    },
    {
        nama: "Armedi",
        nilai: 83
    },
    {
        nama: "Dimitri",
        nilai: 45
    },
    {
        nama: "Barry",
        nilai: 77
    },
]));
/* OUTPUT:
{
    jumlahStudent: 6,
    lulus: [ 'Karim', 'Armedi', 'Barry' ],
    gagal: [ 'Daniel', 'Bima', 'Dimitri' ],
    nilaiTertinggi: 97,
    nilaiAverage: 66
}
*/
console.log(hasilUjian([]));
// "TIDAK ADA PESERTA UJIAN"
console.log(hasilUjian("Dito"));
// "Invalid Input"
console.log(hasilUjian(20));
  // "Invalid Input"