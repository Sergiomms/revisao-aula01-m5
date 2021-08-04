const fetch = require('node-fetch')


//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function soma (...numeros){

    let total = 0
    for(const item of numeros){
        total += parseInt(item, 10)
    }

    console.log(total)
}

soma(...array)



//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a 
//ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
fetch(url)
.then((resp) => {return resp.json()})
.then((data) =>{
    
    let resposta = data.meals[0]
    let Nome = resposta.strMeal
    let id = resposta.idMeal
    let regiao = resposta.strArea
    let ingredientes = [resposta.strIngredient1, resposta.strIngredient2, resposta.strIngredient3, resposta.strIngredient4, resposta.strIngredient5, resposta.strIngredient6, resposta.strIngredient7, resposta.strIngredient8, resposta.strIngredient9]
    let instrucoes = resposta.strInstructions

    console.log(Nome, id, regiao, ingredientes, instrucoes)
})
.catch(error => {
    console.log(error.message)
})

//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) 
//e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

let url2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

fetch(url2)
.then(resp =>{return resp.json()})
.then(data =>{console.log(data.meals.slice(0, 10))})
.catch(erro => {console.log(erro)})