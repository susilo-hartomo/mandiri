function belanja(money) {
    var items = {
        coklat: 50000,
        icecream: 4000,
        waffle: 2500
    }

    var belanjaan = []
    if (money > 2500) {

        while (money >= 2500) {
            for (const key in items) {
                if (money >= items[key]) {
                    belanjaan.push(key)
                    money -= items[key]
                }
            }

        }
    } else {
        return 'Uang kurang'
    }
    return money
}


console.log(belanja(500000))
//[ coklat, ]