const _ = require('lodash')
const cities = require('./data.json')

//const output = _(cities)
//    .filter(c => c.population > 5000000)
//    .countBy(c => c.country)
//    .toPairs()
//    .map(c => _.zipObject(['country', 'cities'], c))
//    .orderBy(c => c.cities, 'desc')
//    .take(5)
//    .value()

//console.log(output)

// Second way
const greaterThan = _.curryRight(_.gte)
const populationGraterThan = num => _.conforms({population: greaterThan(num)})
const zip = _.curry(_.zipObject)

const out = _(cities)
    .filter(populationGraterThan(5000000))
    .countBy('country')
    .toPairs()
    .map(zip(['country', 'cities']))
    .orderBy('cities', 'desc')
    .take(5)
    .value()

console.log(out)
