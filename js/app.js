let add1 = document.querySelector(".add-1")
let add2 = document.querySelector(".add-2")
let add3 = document.querySelector(".add-3")
let add4 = document.querySelector(".add-4")
let add5 = document.querySelector(".add-5")
let add6 = document.querySelector(".add-6")
let item = document.querySelector(".intelval-item")
let total = document.querySelector(".summa")
let price1 = document.querySelector(".price1")
let price2 = document.querySelector(".price2")
let price3 = document.querySelector(".price3")
let price4 = document.querySelector(".price4")
let price5 = document.querySelector(".price5")
let price6 = document.querySelector(".price6")
let price7 = document.querySelector(".price7")
let buttons = document.querySelector(".buttons")
let class1 = document.querySelector(".cheese")
let clear = document.querySelector(".clear")
let buy = document.querySelector(".buy")
typeof Number(total.innerHTML)
typeof Number(total.innerHTML)


let cheese = `<img src="img/cheese.svg" alt="" class="cheese">`
let meat = `<img src="img/meat.svg" alt="" class="meat">`
let solad = `<img src="img/salad.svg" alt="" class="solad">`
let onion = `<img src="img/onion.svg" alt="" class="onion">`
let pickle = `<img src="img/pickle.svg" alt="" class="pickle">`
let tomato = `<img src="img/tomato.svg" alt="" class="tomato">`

add1.addEventListener("click", (e) => {
    item.innerHTML += cheese
    typeof Number(total.innerHTML)
    let result = +total.innerHTML + 2
    total.innerHTML = result
    if (total.innerHTML > 20) {
        buttons.innerHTML = `<span class="h1">Mahsulot Tugadi</span>`
    }
})

add2.addEventListener("click", (e) => {
    item.innerHTML += meat
    let result2 = +total.innerHTML + 5
    total.innerHTML = result2
    if (total.innerHTML > 20) {
        buttons.innerHTML = `<span class="h1">Mahsulot Tugadi</span>`
    }
})

add3.addEventListener("click", (e) => {
    item.innerHTML += onion
    let result3 = +total.innerHTML + 1
    total.innerHTML = result3
    if (total.innerHTML > 20) {
        buttons.innerHTML = `<span class="h1">Mahsulot Tugadi</span>`
    }
})

add4.addEventListener("click", (e) => {
    item.innerHTML += solad
    let result4 = +total.innerHTML + 1
    total.innerHTML = result4
    if (total.innerHTML > 20) {
        buttons.innerHTML = `<span class="h1">Mahsulot Tugadi</span>`
    }
})

add5.addEventListener("click", (e) => {
    item.innerHTML += tomato
    let result5 = +total.innerHTML + 2
    total.innerHTML = result5
    if (total.innerHTML > 20) {
        buttons.innerHTML = `<span class="h1">Mahsulot Tugadi</span>`
    }
})

add6.addEventListener("click", (e) => {
    item.innerHTML += pickle
    let result6 = +total.innerHTML + 2
    total.innerHTML = result6
    if (total.innerHTML > 20) {
        buttons.innerHTML = `<span class="h1">Mahsulot Tugadi</span>`
    }
})



clear.addEventListener("click", (e) => {
    item.innerHTML = ""
    total.innerHTML = 0
})

let check = document.querySelector(".check")
let narx = document.querySelector(".narx")
let narx2 = document.querySelector(".buyurtmasaqami")

let random = Math.floor(Math.random() * 100 ) + 1

buy.addEventListener("click", (e) => {
    // check.style.display = "block"
    setTimeout(() => (check.style.display = 'block'))
    setTimeout(() => (check.style.top = '20%'), 150)
    narx.innerHTML = total.innerHTML
    narx2.innerHTML = random
})

let close = document.querySelector(".yopish")

close.addEventListener("click", (e) => {
    check.style.display = "none"
})




