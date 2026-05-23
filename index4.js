// let input = [1, 2, 3, 4, 5];
// function transform(i) {
//   return i * 2;
// }
// const newArray = input.map(transform);
// console.log(newArray);
let Array = [1, 2, 3, 4, 5, 12, 14, 78];
function filterLogic(i) {
  if (i % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// for (let i = 0; i < Array.length; i++) {
//   if (Array[i] % 2 == 0) {
//     newArray.push(Array[i]);
//   }
// }
const ans = Array.filter(filterLogic);
console.log(ans);
