// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
function arithmetic(a, b, operator){
    if(operator == 'add'){
        console.log(`${a} + ${b} = ${a+b}`)
    } else if(operator == 'subtract'){
        console.log(`${a} - ${b} = ${a-b}`)
    } else if(operator == 'multiply'){
        console.log(`${a} * ${b} = ${a*b}`)
    } else if(operator == 'divide'){
        console.log(`${a} / ${b} = ${a/b}`)
    } else {
        return console.log('Invalid Operator')
    }
}
arithmetic(5, 2, "add")
console.log('========')
arithmetic(5, 2, "subtract")
console.log('========')
arithmetic(5, 2, "multiply")
console.log('========')
arithmetic(5, 2, "divide")
console.log('========')
arithmetic(5, 2, "dividend")