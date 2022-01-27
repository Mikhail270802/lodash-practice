// Higher Order Function

const _ = require('lodash')

function multiple(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

//console.log(multiple(2, 3))

//function double(num) {
//    return multiple(num, 2)
//}

// Функция partial является высокого порядка
//function partial(fn, ...fixed) {
//    return function(...args) {
//        return fn.apply(this, fixed.concat(args))
//    }
//}

//function partial(fn) {
//    const fixed = _.tail(_.toArray(arguments))
//    return function() {
//        return fn.apply(this, _.concat(fixed, arguments))
//    }
//}

//const double = _.partial(multiple(2))
//console.log(double(21))

//const half = _.partialRight(divide, 2)
//const half = _.partial(divide, _, 2)
//console.log(half(4))

// Curing
//const curriedDivide = _.curry(divide)
//console.log(curriedDivide(10, 2)) // 5
//console.log(curriedDivide(10)(2)) // 5

// Flow
const notFlayArray = [1, 2, 3, [4, 5]] // summary = 15
console.log(_.sum(notFlayArray)) // 64.5

const sumFlat = _.flow([_.concat, _.flattenDeep, _.sum])
console.log(sumFlat(notFlayArray)) // 15

