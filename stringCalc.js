
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

// function subtract(num1, num2) {
//     let res = [];

// }































// individual functions


function sumStrings(n1, n2) {
    n2 = n2.replace(/^0+/, '') || '0';
    n1 = n1.replace(/^0+/, '') || '0';
    let num1;
    let num2;
    let res = [];

    if (n1.length > n2.length) {
        num1 = n1
        num2 = n2
    } else {
        num1 = n2;
        num2 = n1;
    }
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
        res.push(String(sum))
    }
    if (carry > 0) {
        res.push(String(carry))
    }
    return res.reverse().join('');
}


function multiplyString(n1, n2) {
    let num1;
    let num2;

    if (n1.length > n2.length) {
        num1 = n1
        num2 = n2
    } else {
        num1 = n2;
        num2 = n1;
    }
    let adder = '1'
    let res = num1
    let i = '1'
    function iter(counter, result) {


    }

    return iter('1', num1)
}



function subStrings(n1, n2) {
    let comparison = compare(n1, n2)

    switch (comparison) {
        case '=':
            return '0'
        case '>':
            num1 = n1
            num2 = n2.padStart(n1.length, "0")
            break;
        case '<':
            num1 = n1.padStart(n2.length, "0")
            num2 = n2;
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
            res.push((digit1 + 10 - digit2))
            carry = 1
        }


    }
    let i = res.length - 1;
    while (i > 1) {
        if (res[i] !== 0) {
            break;
        }
        res.pop()
    }
    res.reverse();
    res.unshift(num1.slice(0, num1.length - num2.length))
    return res.join('');
}

console.log(subStrings('1000', '1'));

function paddedNumbers(n1, n2) {
    if (n1.length > n2.length) {
        n2 = n2.padStart(n1.length, "0")
    }
    else {
        n1 = n1.padStart(n2.length, "0")
    }
    return { n1, n2 }
}

function isEven(n) {
    return Number(n.charAt(n.length - 1)) % 2 === 0
}











function compare(n1, n2) {


    if (n1.length > n2.length) {
        return '>'
    } else if (n1.length < n2.length) {
        return '<'
    }
    else if (n1 === n2) {
        return '='
    }
    let i = 0
    while (i != n1.length) {
        let l, m;
        l = Number(n1[i]);
        m = Number(n2[i]);
        if (l != m) {
            if (l > m) {
                return '>'
            }
            else {
                return '<'
            }
        }
        i++;
    }
    return '='
}

// function subStrings(n1, n2) {
//     n2 = n2.replace(/^0+/, '') || '0';
//     n1 = n1.replace(/^0+/, '') || '0';
//     let num1;
//     let num2;
//     let res = [];

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
//         res.push(String(sum))
//     }
//     if (carry > 0) {
//         res.push(String(carry))
//     }
//     return res.reverse().join('');
// }
