/*
=================
AGE VERIFICATION
=================

[INSTRUCTION]
Terdapat function ageVerification , function akan mengembalikan list
orang yang memiliki umur diatas 19 tahun. Setiap nama juga akan diberikan imbuhan :
- jika gender male diberikan imbuhan Mr.
- jika gender female dan umur diatas 30 akan diberikan imbuhan Mrs.
- jika gender female dan umur dibawah 30 akan diberikan imbuhan Ms.

[EXAMPLE]
input : ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']
output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']

[RULES]
- dilarang menggunakan REGEX
- dilarang menggunakan substring, substr, slice, splice
*/

var user_t = ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']

function toArray(a) {
    var user = []
    var temp = ''
    for (var j = 0; j < user_t.length; j++) {
        if (user_t[j] == ',') {
            user.push(temp)
            temp = ''
        } else {
            temp += user_t[j]
        }
    }
    user.push(temp)

    console.log(user)

    unserName = ''
    if (user[1] = 'male') {
        unserName += `Mr ${user[0]}`
    } else {
        if (user[2] > 30) {
            unserName += `Mrs ${user[0]}`
        } else {
            unserName += `Ms ${user[0]}`
        }
    }
    return unserName
}


for (let i = 0; i < user_t.length; i++) {
    user_a = []
    user_a.push(toArray[user_t[i]])
    user_a.push(',')
}
console.log(toArray(user_a))
// console.log(toArray(user_t)[0])

// temp += user_t[0]
// temp += user_t[1]
// console.log(temp)
// user.push(temp)
// console.log(user)