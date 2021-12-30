const licensePlate = [
    '29-L1',
    '30-S1',
    '31-V1',
    '33-T1',
    '18-S1',
    '40-N1',
    '50-H1',
    '37-M1',
]
const startHaNoiPlate = ['29', '30', '31', '32', '33', '40']

// let haNoiLicensePlate = [];
// licensePlate.forEach(cur => {
//     if( cur.startsWith('29') ||
//         cur.startsWith('31') ||
//         cur.startsWith('32') ||
//         cur.startsWith('33') ||
//         cur.startsWith('32') ||
//         cur.startsWith('33') ||
//         cur.startsWith('40')) {
//             haNoiLicensePlate.push(cur)
//         }
// })

let haNoiLicensePlate = licensePlate.filter(cur => 
    cur.startsWith('29') || cur.startsWith('31') ||
    cur.startsWith('32') || cur.startsWith('33') ||
    cur.startsWith('32') || cur.startsWith('33') ||
    cur.startsWith('40')
)

console.log(`Các biển số xe hợp lệ là: ${haNoiLicensePlate}`)