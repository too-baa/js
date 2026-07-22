/*
CONVERSION TO NUMBER
'76'=> 76, number
'353abc'=> NaN, number
'abc'=> NaN, number
true=> 1; false=0, number
undefined=> NaN, number
null=> 0
*/

// let score1 = "7"
// console.log(typeof score1)

// let valueInNumber = Number(score1)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/*
CONVERSION TO BOOLEAN
1 & other numbers=> true; 0=>false
''=> false
'ok'=> true
undefined=> false
null=> false
*/

// let isLoggedIn = null
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/*
CONVERSION TO STRING
45=> '45'
true=> 'true'
undefined=> 'undefined'
null=> 'null'
*/
let str = null
console.log(typeof str)
let stringStr = String(str)
console.log(stringStr)