// #1

let userObj = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27
};

console.log(userObj);

// #2
userObj = {
    firstName: 'John',
    lastName: 'Smith',

    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(userObj.fullName());

// #3

function defUpperStr(text) {
    return (text || 'DEAULT TEXT').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());

// #4

function evenFn(n) {
    let result = [];
    for (let i = 2; i <= n; i += 2) {
        result.push(i);
    }
    return result;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

// #5

function weekFn(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 1 || n > 7) {
        return null;
    }

    let day;
    switch (n) {
        case 1:
            day = 'Понеділок';
            break;
        case 2:
            day = 'Вівторок';
            break;
        case 3:
            day = 'Середа';
            break;
        case 4:
            day = 'Четвер';
            break;
        case 5:
            day = 'П’ятниця';
            break;
        case 6:
            day = 'Субота';
            break;
        case 7:
            day = 'Неділя';
            break;
        default:
            day = null;
    }
    return day;
}

console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));

// #6

function ageClassification(n) {
    return n < 0 ? null :
        n <= 24 ? 'Дитинство' :
            n <= 44 ? 'Молодість' :
                n <= 65 ? 'Зрілість' :
                    n <= 75 ? 'Старість' :
                        n <= 90 ? 'Довголіття' :
                            n <= 122 ? 'Рекорд' :
                                null;
}

console.log(ageClassification(-1));
console.log(ageClassification(0));
console.log(ageClassification(1));
console.log(ageClassification(24));
console.log(ageClassification(24.01));
console.log(ageClassification(44));
console.log(ageClassification(44.01));
console.log(ageClassification(65));
console.log(ageClassification(65.1));
console.log(ageClassification(75));
console.log(ageClassification(75.01));
console.log(ageClassification(90));
console.log(ageClassification(90.01));
console.log(ageClassification(122));
console.log(ageClassification(122.01));
console.log(ageClassification(150));


console.log('    -1 :', ageClassification(-1) === null);
console.log('     0 :', ageClassification(0) === 'Дитинство');
console.log('     1 :', ageClassification(1) === 'Дитинство');
console.log('    24 :', ageClassification(24) === 'Дитинство');
console.log(' 24.01 :', ageClassification(24.01) === 'Молодість');
console.log('    44 :', ageClassification(44) === 'Молодість');
console.log(' 44.01 :', ageClassification(44.01) === 'Зрілість');
console.log('    65 :', ageClassification(65) === 'Зрілість');
console.log('  65.1 :', ageClassification(65.1) === 'Старість');
console.log('    75 :', ageClassification(75) === 'Старість');
console.log(' 75.01 :', ageClassification(75.01) === 'Довголіття');
console.log('    90 :', ageClassification(90) === 'Довголіття');
console.log(' 90.01 :', ageClassification(90.01) === 'Рекорд');
console.log('   122 :', ageClassification(122) === 'Рекорд');
console.log('122.01 :', ageClassification(122.01) === null);
console.log('   150 :', ageClassification(150) === null);

// #7

function oddFn(n) {
    let result = [];
    let i = 1;
    while (i <= n) {
        result.push(i);
        i += 2;
    }
    return result;
}

console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

// #8

function mainFunc(a, b, cb) {
    if (typeof cb !== 'function') {
        return false;
    }
    return cb(a, b);
}

function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
    return Math.pow(num, pow);
}

function cbAdd(a, b) {
    return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));
