const students = [
    {name: 'Nam', sex: 'Male', score: 7},
    {name: 'Sinh', sex: 'Male', score: 9},
    {name: 'Quỳnh', sex: 'Female', score: 8},
    {name: 'Chang', sex: 'Female', score: 10},
    {name: 'Long', sex: 'Male', score: 8},
    {name: 'Mạnh', sex: 'Male', score: 8},
    {name: 'Tâm', sex: 'Female', score: 8},
    {name: 'Mai', sex: 'Male', score: 7},
]



let boyStudents = students.filter(per => per.sex === 'Male') 
let girlStudents = students.filter(per => per.sex === 'Female') 

function totalScore(obj) {
    const total = (acc, cur) => acc+ cur.score
    return obj.reduce(total, 0);
}

let mediumScoreBoy = totalScore(boyStudents)/boyStudents.length;
let mediumScoreGirl = totalScore(girlStudents)/girlStudents.length;
let mediumScore = totalScore(students)/students.length;

console.log(`Điểm trung bình của cả lớp là : ${mediumScore.toFixed(2)}`)
console.log(`Điểm trung bình của học sinh nam là : ${mediumScoreBoy.toFixed(2)}`)
console.log(`Điểm trung bình của học sinh nữ là : ${mediumScoreGirl.toFixed(2)}`)


