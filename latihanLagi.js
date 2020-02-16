function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];

    // you can only write your code here!
    var belanjaan = []
    for (let i = 0; i < listBarang.length; i++) {
        var beli ={}
        beli.product = listBarang[i][0]
        beli.shoppers = []
        beli.leftOver = listBarang[i][2]
        beli.totalProfit = 0
        for (let j = 0; j < shoppers.length; j++) {
            if (listBarang[i][0] == shoppers[j].product && listBarang[i][2] >= shoppers[j].amount) {
                beli.shoppers.push(shoppers[j].name)
                beli.leftOver -= shoppers[j].amount
                beli.totalProfit += shoppers[j].amount * listBarang[i][1]
            }
        }
        belanjaan.push(beli)
        // console.log('belanjaan: ', belanjaan);
    }
    return belanjaan
}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]