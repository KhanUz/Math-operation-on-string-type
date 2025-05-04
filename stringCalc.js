// abstracted function

function operations(fn, n1, n2) {
    n2 = n2.replace(/^0+/, '') || '0';
    n1 = n1.replace(/^0+/, '') || '0';
    let num1;
    let num2;

    if (n1.length > n2.length) {
        num1 = n1
        num2 = n2
    } else {
        num1 = n2;
        num2 = n1;
    }
    return fn(num1, num2)
}

function sum(num1, num2) {
    let result = [];
    num2 = num2.padStart(num1.length, '0')
    let carry = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = +num1[i] + +num2[i] + carry;
        if (sum > 9) {
            carry = 1;
            sum = sum - 10;
        } else {
            carry = 0;
        }
        result.push(String(sum))
    }
    if (carry > 0) {
        result.push(String(carry))
    }
    return result.reverse().join('');
}

function multiply(num1, num2) {
    let adder = '1'
    let res = num1
    let i = '1'
    while (i != num2) {
        res = operations(sum, num1, res)
        i = operations(sum, adder, i)
    }

    return res
}
































// individual functions


// function sumStrings(n1, n2) {
//     n2 = n2.replace(/^0+/, '') || '0';
//     n1 = n1.replace(/^0+/, '') || '0';
//     let num1;
//     let num2;
//     let result = [];

//     if (n1.length > n2.length) {
//         num1 = n1
//         num2 = n2
//     } else {
//         num1 = n2;
//         num2 = n1;
//     }
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
//         result.push(String(sum))
//     }
//     if (carry > 0) {
//         result.push(String(carry))
//     }
//     return result.reverse().join('');
// }


// function multiplyString(n1, n2) {
//     let num1;
//     let num2;

//     if (n1.length > n2.length) {
//         num1 = n1
//         num2 = n2
//     } else {
//         num1 = n2;
//         num2 = n1;
//     }
//     let adder = '1'
//     let res = num1
//     let i = '1'
//     while (i != num2) {
//         res = sumStrings(num1, res)
//         i = sumStrings(adder, i)
//     }

//     return res
// }
