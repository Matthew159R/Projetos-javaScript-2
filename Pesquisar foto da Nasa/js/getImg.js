const apiKey = 'Minha api key'
// Não posso forcener minha APIkey

const getPlanetData = async arrDate => {
    try {

        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`)

        if (!response.ok) {
            throw new Error('Ocorreu um erro')
        }

        const planetData = await response.json()
        return planetData

    }catch (error) {
        console.log(`${error.name} : ${error.message}`)
    }
}

/*

Todos os query parameter do end point

https://api.nasa.gov/planetary/etcb/?api_key=SUA_CHAVE_DE_API&planet=NomeDoExoplaneta&imagetype=TipoDeImagem&resolution=Resolucao

*/
