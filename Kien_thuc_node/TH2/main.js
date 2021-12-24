const number = 37;
let isPrimeNumber = true;

if(number < 2) isPrimeNumber = false;
else {
    for(let i = 2 ; i <= Math.sqrt(number) ; i++) {
        if(number % i == 0) {
            isPrimeNumber = false;
            break;
        }
    }
}

if(isPrimeNumber) console.log(`${number} là số nguyên tố`);
else console.log(`${number} không phải là số nguyên tố`);