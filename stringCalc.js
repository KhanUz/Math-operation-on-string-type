
// // abstracted function

// function operations(fn, n1, n2) {
//     n2 = n2.replace(/^0+/, '') || '0';
//     n1 = n1.replace(/^0+/, '') || '0';
//     let num1;
//     let num2;

//     if (n1.length > n2.length) {
//         num1 = n1
//         num2 = n2
//     } else {
//         num1 = n2;
//         num2 = n1;
//     }
//     return fn(num1, num2)
// }

// function sum(num1, num2) {
//     let res = [];
//     num2 = num2.padStart(num1.length, '0')
//     let carry = 0;
//     for (let i = num1.length - 1; i >= 0; i--) {
//         let sum = +num1[i] + +num2[i] + carry;
//         if (sum > 9) {
//             carry = 1;
//             sum = sum - 10;
//         } else {
//             carry = 0;
//         }
//         res.push(String(sum))
//     }
//     if (carry > 0) {
//         res.push(String(carry))
//     }
//     return res.reverse().join('');
// }

// function multiply(num1, num2) {
//     let adder = '1'
//     let res = num1
//     let i = '1'
//     while (i != num2) {
//         res = operations(sum, num1, res)
//         i = operations(sum, adder, i)
//     }

//     return res
// }


































function sumStrings(n1, n2) {

    let num1, num2
    let res = [];

    const maxLen = Math.max(n1.length, n2.length);
    num1 = n1.padStart(maxLen, '0');
    num2 = n2.padStart(maxLen, '0');




    let carry = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = +num1[i] + +num2[i] + carry;
        if (sum > 9) {
            carry = 1;
            sum = sum - 10;
        } else {
            carry = 0;
        }
        res.push(String(sum))
    }
    if (carry > 0) {
        res.push(String(carry))
    }
    return res.reverse().join('');
}



function subStrings(n1, n2) {
    let comparison = compare(n1, n2)
    let num1, num2;
    let sign = ''

    switch (comparison) {
        case '=':
            return '0'
        case '>':
            num1 = n1
            num2 = n2.padStart(n1.length, "0")
            break;
        case '<':
            sign = '-'
            num1 = n2;
            num2 = n1.padStart(n2.length, "0")
            break;
    }


    let res = []
    let carry = 0;

    for (let index = num2.length - 1; index >= 0; index--) {

        let digit1 = carry ? (Number(num1[index]) - 1) : Number(num1[index])
        carry = 0;
        let digit2 = Number(num2[index])
        if (digit1 === digit2) {
            res.push(0)
        } else if (digit1 > digit2) {
            res.push(digit1 - digit2)
        } else {
            res.push((digit1 + 10 - digit2));
            carry = 1;
        }
    }


    let i = res.length - 1;
    while (i > 0) {
        if (res[i] !== 0) {
            break;
        }
        res.pop();
        i--;
    }
    res.push(sign)
    res.reverse();
    res.unshift(num1.slice(0, num1.length - num2.length))
    return res.join('');
}









function multiplyString(n1, n2) {
    let num1, num2;

    function multiplyDigit(n, d) {
        if (d === '0') return '0'
        if (d === '1') return n

        let res = [];
        let carry = 0;
        for (let index = n.length - 1; index >= 0; index--) {
            let multiplication = n[index] * d
            res.push(multiplication % 10 + carry)
            carry = parseInt(multiplication / 10)
        }
        res.push(carry)
        res.reverse()

        return res.join("")
    }





}





function paddedNumbers(n1, n2) {
    n2 = n2.padStart(n1.length, "0")
    n1 = n1.padStart(n2.length, "0")
    return { n1, n2 }
}




(
    function () {
        let startTime, endTime;

        startTime = performance.now()
        console.log(test(1000000, sumStrings, (a, b) => a + b, (n) => n.toString()));
        console.log(performance.now() - startTime, "ms");

        startTime = performance.now()
        console.log(test(1000000, subStrings, (a, b) => a - b, (n) => n.toString()));
        console.log(performance.now() - startTime, "ms");

    }
)

function isEven(n) {
    return Number(n.charAt(n.length - 1)) % 2 === 0
}

function compare(n1, n2) {
    if (n1.length > n2.length) return '>';
    if (n1.length < n2.length) return '<';

    for (let i = 0; i < n1.length; i++) {
        if (n1[i] > n2[i]) return '>';
        if (n1[i] < n2[i]) return '<';
    }
    return '=';

}

function double(n) {
    return sumStrings(n, n)
}










function test(n, fn, operation, inputModif) {
    for (let i = 0; i < n; i++) {

        let random1 = Math.floor(Math.random() * n);
        let random2 = Math.floor(Math.random() * n);
        let myCalc = fn(inputModif(random1), inputModif(random2));
        let calc = inputModif(operation(random1, random2))

        if (myCalc !== calc) {
            return { i: i, "n1": random1, "n2": random2, "my result": myCalc, "actaul result": calc }
        }

    }
    return "Passed"

}




