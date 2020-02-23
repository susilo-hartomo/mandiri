/**
 * =================
 * Steam Summer Sale
 * =================
 *
 * [Description]
 * Steam sedang diskon besar-besaran untuk beberapa nama game besar, berikut datanya:
 * | No  | Title                            | Short Key | Price  | Genre                |
 * | --- | -------------------------------- | --------- | ------ | -------------------- |
 * | 1   | Grand Theft Auto V               | gta5      | 290000 | action               |
 * | 2   | Assassin's Creed Odyssey         | aco       | 500000 | rpg                  |
 * | 3   | Counter Strike: Global Offensive | csgo      | 120000 | first-person shooter |
 * | 4   | Playerunknown's Battlegrounds    | pubg      | 210000 | first-person shooter |
 * | 5   | Monster Hunter: World            | mhw       | 250000 | action               |
 *
 * [Instruction]
 * 1. buat sebuah function yang menerima array of strings yang valuenya berupa short-key dari game yang dibeli
 * 2. function terssebut akan mereturn sebuah object yang berisikan data yang dikelompokkan berdasarkan genre-nya
 *    dan total harga yang harus dibayar user.
 *
 * [Example]
 * @input = ['gta5']
 * @output = {
 *   games: [
 *     {
 *       title: 'Grand Theft Auto V',
 *       genre: 'action'
 *     }
 *   ],
 *   subTotal: 290000
 * }
 *
 * [Rules]
 * 1. Hanya boleh menggunakan built-in function: .push
 * 2. Dilarang menggunakan regex dan built-in function lain.
 */

function steam(arr) {
  // your code here
  var obj = {
    gta5: {
      title: 'Grand Theft Auto',
      genre: 'action',
      price: 290000
    },
    aco: {
      title: 'Assassins Creed Odyssey',
      genre: 'rpg',
      price: 500000
    },
    csgo: {
      title: 'Counter Strike: Global Offensive',
      genre: 'first-person shooter',
      price: 120000
    },
    pubg: {
      title: 'Playerunknowns Battlegrounds',
      genre: 'first-person shooter',
      price: 210000
    },
    mhw: {
      title: 'Monster Hunter: World',
      genre: 'action',
      price: 250000
    }
  }

  let belanja = {}
  belanja.games = []
  belanja.subTotal = 0

  for (let i = 0; i < arr.length; i++) {
    for (const k in obj) {
      if (arr[i] == k) {
        belanja.games.push({ title: obj[k].title, genre: obj[k].genre })
        belanja.subTotal += obj[k].price
      }
    }

  }
  return belanja
}

console.log(steam([]));
// {
//   games: [],
//   subTotal: 0
// }

console.log(steam(["gta5", "aco"]));
// {
//   games: [
//     {
//       title: 'Grand Theft Auto',
//       genre: 'action'
//     },
//     {
//       title: 'Assassins Creed Odyssey',
//       genre: 'rpg'
//     },
//   ],
//   subTotal: 790000
// }

console.log(steam(["aco", "pubg", "mhw"]));
// {
//   games:
//     [
//       {
//         title: 'Assassins Creed Odyssey',
//         genre: 'rpg'
//       },
// {
//   title: 'Playerunknowns Battlegrounds',
//   genre: 'first-person shooter'
// },
//       {
//         title: 'Monster Hunter: World',
//         genre: 'action'
//       }
//     ],
//   subTotal: 960000
// }

console.log(steam(["gta5", "aco", "pubg", "csgo", "mhw"]));

// {
//   games:
//     [
//       {
//         title: 'Grand Theft Auto V',
//         genre: 'action'
//       },
//       {
//         title: 'Assassins Creed Odyssey',
//         genre: 'rpg'
//       },
//       {
//         title: 'Playerunknowns Battlegrounds',
//         genre: 'first-person shooter'
//       },
      // {
      //   title: 'Counter Strike: Global Offensive',
      //   genre: 'first-person shooter'
      // },
//       {
//         title: 'Monster Hunter: World',
//         genre: 'action'
//       }
//     ],
//   subTotal: 1370000
// }
