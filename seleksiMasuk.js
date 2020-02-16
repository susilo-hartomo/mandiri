/**
  * ===================================
  * Seleksi masuk Universitas HacktiFox
  * ===================================
  * 
  * Function checkAdmission akan mengecek apakah seseorang pendaftar bisa menjadi mahasiswa baru dari universitas HacktiFox.
  * Mahasiswa baru direpresentasikan dengan object dengan parameter:
  * - `name`  : Nama dari calon mahasiswa
  * - `dob`   : Tanggal lahir dari calon mahasiswa
  * - `date`  : Tanggal mahasiswa tersebut mendaftar ke universitas ini
  * - `scores`: Array berisi nilai-nilai dari mahasiswa tersebut, dengan urutan:
  *             [nilai_matematika, nilai_bahasa_indonesia, nilai_bahasa_inggris, nilai_IPA]
  * 
  * Syarat masuk ke universitas ini adalah mahasiswa memperoleh nilai rata-rata >= 70.
  * Masing-masing pendaftar mendapatkan student id, walaupun mereka gagal diterima di universitas ini.
  * Student id dibuat dengan format:
  * 
  * [2 digit pertama tahun pendaftaran] + [2 digit bulan pendaftaran] + [2 digit terakhir tahun kelahiran] + [2 digit bulan kelahiran]
  * contoh:
  * {
  *  name: Hanif,
  *  dob: '10-05-1997',
  *  date: '14-01-2020',
  *  scores: [60,60,70,60]
  * }
  * 
  * maka student id dia adalah:
  * 20019705
  * [20][01][97][05]
  * 
  * 
  * Function akan menerima input berupa object student, lalu akan mengoutput object dengan format: 
  *  { 
  *     name: 'Hanif',
  *     id  : '20019705',
  *     status: 'rejected'
  *  }
  * 
  * -status: bisa berisi 'accepted' atau 'rejected', rejected bila nilai rata-rata <70, dan accepted bila nilainya >=70.
  * 
  * 
  * Rules:
  * - Dilarang menggunakan built-in function selain .push()
  *
  */

function checkAdmission(student) {
    // your code here
    function rata2(arr) {
        let total = 0
        for (let i = 0; i < arr.length; i++) {
            total += arr[i]
        }
        let mean = total / arr.length
        return mean
    }

    function id(daftar) {
        let tglDaftar = []
        let temp = ''
        for (let i = 0; i < daftar.length; i++) {
            if (daftar[i] !== '-') {
                temp += daftar[i]
            }
            else {
                tglDaftar.push(temp)
                temp = ''
            }
        }
        tglDaftar.push(temp)

        return `${tglDaftar[2][2]}${tglDaftar[2][3]}${tglDaftar[1]}`
    }

    var dataSiswa = {}
    dataSiswa.name = student.name
    dataSiswa.id = `${id(student.date)}${id(student.dob)}`
    dataSiswa.rata2 = rata2(student.scores)
    if (rata2(student.scores) >= 70) {
        dataSiswa.status = 'accepted'
    }else(
        dataSiswa.status = 'rejected'
    )

    return dataSiswa
}

console.log(checkAdmission({
    name: "Rafif",
    dob: "15-11-1997",
    date: '16-01-2020',
    scores: [70, 40, 50, 90]
}))
//{ name: 'Rafif', id: '20019711', status: 'rejected' }


console.log(checkAdmission({
    name: "Akbar",
    dob: "14-02-1995",
    date: '16-12-2019',
    scores: [40, 70, 90, 90]
}))
  // //{ name: 'Akbar', id: '19129502', status: 'accepted' }