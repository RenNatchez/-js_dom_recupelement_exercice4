//--1--
let a = document.getElementsByTagName('h1')[1]
console.log(a.textContent)

//--2--
let b = document.getElementsByTagName('ul')[0]
console.log(b.lastElementChild.textContent)

//--3--
let c = document.getElementsByTagName('p')[0]
let d = c.style.textTransform = "uppercase"

//--4--
let aar = document.getElementsByTagName('li')
console.log(aar.length)
for (let i = 0; i < aar.length; i++) {
    console.log(document.getElementsByTagName('li')[i].textContent)
}