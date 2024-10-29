
const menu = [
    {
        img: "br-fest.svg",
        name: "breakfest"
    },
    {
        img: "icon2.svg",
        name: "lunch"
    },
    {
        img: "br-festt.svg",
        name: "dinner"
    },
    {
        img: "icon-4.svg",
        name: "dessert"
    },
    {
        img: "icon-5.svg",
        name: "quick bite!"
    },
]

const menuEL = document.getElementById("menu")

menuEL.innerHTML = menu.map(m => {
    return `
    <div>
    <img src="../img/${m.img}" alt="">
    <h4>${m.name}</h4>
    </div>`
}).join('')

const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
const recipes_cards = document.querySelector('.recipes_cards')
let buttons;


function getMeals(categoty = "Starter") {
    fetch(API + categoty)
        .then(response => response.json())
        .then(foods => {
            console.log(foods.meals);
            recipes_cards.innerHTML = foods.meals.slice(0, 6).map(el => {
                console.log('2');
                return renderCard(el)
            }).join('')
        })
}

getMeals()

buttons = recipes_cards.querySelectorAll('button')
console.log("buttons: 1", buttons);

function renderCard(food) {
    return `
        <div class="card">
            <div class="card-img">
                <img src="${food.strMealThumb}" alt="">
            </div>
            <div class="card-text">
                <h4> ${ food.strMeal.length > 25 ? food.strMeal.substring(0,23) + '...' : food.strMeal}</h4>
            <div>
                <p>40 Min - easy prep - 3 serves</p>
                <button>view recipe</button>
                </div>
            </div>
        </div>`
}
