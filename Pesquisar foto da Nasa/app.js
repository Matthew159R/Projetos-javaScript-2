const form = document.querySelector('form')

const img = document.querySelector('.img')
const title = document.querySelector('.title-img')
const date = document.querySelector('.date')
const explanation = document.querySelector('.explanation')
const feedback = document.querySelector('.feedback')

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1
const year = currentDate.getFullYear();
console.log(`${day} - ${month} - ${year}`)


form.addEventListener('submit', event => {
    event.preventDefault()
    const dayInput = event.target.day
    const monthInput = event.target.month
    const yearInput = event.target.year

    const dateSearch = []

    if (!dayInput.value || dayInput.value.length > 2) {
        dayInput.value = String(day)
        dateSearch.push(dayInput.value)
    }else {
        dateSearch.push(String(dayInput.value))
    }

    if (!monthInput.value || monthInput.value.length > 2 || Number(monthInput.value) > 31) {
        monthInput.value = String(month)
        dateSearch.push(monthInput.value)
    }else {
        dateSearch.push(String(monthInput.value))
    }

    if (!yearInput.value || yearInput.value.length < 4 || Number(yearInput.value) > year || Number(yearInput.value) < 1995) {
        yearInput.value = String(year)
        dateSearch.push(yearInput.value)
    }else {
        dateSearch.push(String(yearInput.value))
    }

    dateSearch[0] < 10 ? dateSearch[0] = `0${dateSearch[0]}` : dateSearch[0]
    dateSearch[1] < 10 ? dateSearch[1] = `0${dateSearch[1]}` : dateSearch[1]

    console.log(dateSearch)

    getPlanetData(dateSearch)
        .then(data => {
            console.log(data)
            img.src = data.url
            title.textContent = data.title
            explanation.textContent = data.explanation
            date.textContent = data.date

            img.classList.remove('d-none')
        })
        .catch(error => {
            feedback.textContent = 'Foto não encontrada. Verifique as datas que você forneceu'
            setTimeout(() => {
                feedback.textContent = ''
            }, 4000)
        })



})


