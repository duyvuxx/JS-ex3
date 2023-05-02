var foods = ["Pizza", "Pho Bo", "Ramen", "Sushi", "Banh My"];
// 1. Sap xep tang dan va giam dan theo so luong ky tu

// foods.sort(function (a, b) {
//   return a.length - b.length;
// });
// console.log(`Increasing:`, foods);

// foods.sort(function (a, b) {
//   return b.length - a.length;
// });
// console.log(`Decreasing:`, foods);

// 2. Bien doi mang sang dang: "Pizza" => "Pizza - 5"
// var transform = foods.splice(0, 1, "Pizza - 5");
// console.log(`🚀 | foods:`, foods);

// 3. Nhap vao cac mon ban thich: "Mi Tom, Keo bong" => Them cac mon tu format tren vao mang

// var likedFoods = ["Mi Tom, Keo bong"];
// var addFoods = foods.concat(likedFoods);
// console.log(`🚀 | foods:`, addFoods);

// 4. Tao mot mang moi gom cac mon chua chu "a"
// var newFoods = [];
// for (var val of foods) {
//   if (val.includes("a")) newFoods.push(val);
// }
// console.log(`🚀 | newFoods:`, newFoods);

// 5. Tim nhung mon chua 5 ky tu
// var kyTu = [];
// for (var val of foods) {
//   if (val.length == 5) kyTu.push(val);
// }

// console.log(kyTu);
