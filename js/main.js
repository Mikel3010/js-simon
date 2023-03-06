'use strict'

const myNumber = []
while(myNumber.length < 5){
    let myNumberNum = Math.floor(Math.random() * 100) + 1
    if(myNumber.indexOf(myNumberNum) === -1) myNumber.push(myNumberNum)
}
console.log(myNumber)
document.getElementById('random').innerHTML = myNumber
setTimeout(hidden,30000)
function hidden(){
    const random = document.getElementById('random')
    random.style.display = 'none'
}

setTimeout(appear,31000)
function appear(){
    const userNumberPromt = []
    for(let i = 0; i < 5; i++){
        const userNumber = Number(prompt ('inserci il numero '))
        console.log(userNumber)
        userNumberPromt.push(userNumber)
    }
    console.log(userNumberPromt)
    const totArray = [...myNumber, ...userNumberPromt]
    console.log(totArray)
    const duplicates = totArray.filter((item, index) => index !== totArray.indexOf(item))
    console.log(duplicates)
    document.getElementById('result').innerHTML = `Hai indovinato ${duplicates.length} numeri , i numeri indovinati sono: ${duplicates}`
}
