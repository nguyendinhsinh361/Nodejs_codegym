const defaultDay = [
    {day: 'Chủ nhật', index: 0},
    {day: 'Thứ hai',  index: 1},
    {day: 'Thứ ba',  index: 2},
    {day: 'Thứ tư',  index: 3},
    {day: 'Thứ năm', index: 4},
    {day: 'Thứ sáu', index: 5},
    {day: 'Thứ bảy', index: 6},
]

let nowDate = new Date();
let nowDay = nowDate.getDay();
function checkDay() {
    defaultDay.forEach(curDay => {
        if(curDay.index == nowDay) nowDay = curDay.day
    }
)} 

checkDay();
console.log(`Hôm nay là : ${nowDay}`);
