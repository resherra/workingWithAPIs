// fetch(`https://dog.ceo/api/breeds/list/all`).then(function (response) {
//     return response.json()
// }).then(function (data) {
//     console.log(data)
// })

async function start() {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`)
    const data = await response.json()
    createBreedList(data)
}

start()

function createBreedList(data) {

}