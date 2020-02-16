// 
/**
 * Get Combination
 * function yang menerima string dan membuat kombinasi string dalam array
 * 
 * INPUT :
 * 'aku'
 * 
 * OUTPUT :
 * [ 'a', 'ak', 'aku', 'k', 'ku', 'u' ]
 * 
 */
function getCombinations(value) {
    // your code here
    var tampung =[]
    for (let i = 0; i < value.length; i++) {
        var temp = ''
        for (let j = i; j < value.length; j++) {
            temp += value[j]
            // console.log(temp);
            tampung.push(temp)            
        }
    }
    console.log(tampung);
     
  }
  //TEST CASE
  getCombinations("cros");
  //Result yang diharapkan, ada 10 kombinasi, yaitu :
  // ["c", "cr", "cro", "cros", "r", "ro", "ros", "o", "os", "s"]
  getCombinations("artic");
  //Result yang diharapkan, ada 15 kombinasi, yaitu :
  // ["a", "ar", "art", "arti", "artic", "r", "rt", "rti", "rtic", "t", "ti", "tic", "i", "ic", "c"]
  getCombinations("darwin");
  //Result yang diharapkan, ada 21 kombinasi, yaitu :
  // ["d", "da", "dar", "darw", "darwi", "darwin", "a", "ar", "arw", "arwi", "arwin", "r", "rw", "rwi", "rwin", "w", "wi", "win", "i", "in", "n"]