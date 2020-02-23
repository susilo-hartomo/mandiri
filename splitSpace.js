// function splitSpace input is string
// output is array of string result of split from space
function splitSpace(string) {
    // your code here
    var temp = []
    var temp1 = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            temp1 += string[i]
        } else {
            temp.push(temp1)
            temp1 = ''
        }
    }
    temp.push(temp1)

    return temp
}

var arr =  splitSpace('hello black dragon and hello red dragon');

// function getUnique input is array of strings 
// Ouput is array of strings with no identic value
function getUnique(arr) {
    // your code here
    var hasil = []
    for (let i = 0; i < arr.length; i++) {
        check = true
        for (let j = 0; j < hasil.length; j++) {
            if (arr[i].toUpperCase() == hasil[j].toUpperCase()) {
                check = false
            }
        }
        if (check == true) {
            hasil.push(arr[i])
        }
    }
    return hasil
}

var arrr = getUnique(arr);

// Function manualJoin have 2 paramater 
// paramater1 is array of strings and paramater2 is operator
// Ouput is string same as result from .join(opeerator) or 'No-Words'
function manualJoin(words, operator) {
    // your code here
    var hasil = ''
    for (let i = 0; i < words.length; i++) {
        if (i != words.length - 1) {
            hasil += words[i]
            hasil += operator
        } else {
            hasil += words[i]
            
        }
    }

    if (hasil.length == 0) {
        return 'No Words'
    }else{
        return hasil
    }
}
console.log('manualJoin: ', manualJoin(arrr,'-'));
// function uniqueFinder will return the same as test-case
// dont't change uniqueFinder function.
function uniqueFinder(sentence) {
    return manualJoin(getUnique(splitSpace(sentence)), '-')
}
// Rules :
// No built-in function
console.log(uniqueFinder('hello black dragon and hello red dragon')); // 'hello=black-dragon-and-red'
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // 'hello-hlloe'
console.log(uniqueFinder('john is coding and he is coding')); // 'john-is-coding-and-he'
console.log(uniqueFinder('')); // 'No-Words'