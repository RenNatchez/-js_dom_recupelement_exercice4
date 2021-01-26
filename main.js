//--1--
let a = document.getElementsByTagName('h1')[1]
console.log(a.textContent)

//--2--
let b = document.getElementsByTagName('ul')[0]
console.log(b.lastElementChild.textContent)

//--3--
let c = document.getElementsByTagName('p')[0]
let d = c.textContent.toUpperCase()
console.log(d)
//--4--
let aar = document.getElementsByTagName('li')

console.log(aar.length)

var arr2 = Array.from(aar)
console.log(arr2)

arr2.forEach(element => {
    console.log(element)
});