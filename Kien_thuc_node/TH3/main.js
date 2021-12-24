const arrayNumber = [2, 5, 6, 456, 2, 76, 10120, 123, 888];
let max = 0

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (max < element) {
//         max = element
//     }
// }

arrayNumber.forEach(ele => {
    if(max < ele) max = ele
})

console.log(`Số lớn nhất trong mảng là ${max}`);