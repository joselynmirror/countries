console.log('Paises1')
const Pag = fetch('https://restcountries.com/v3.1/independent?status=true')
/*    Pag.then(function(res){
        console.log("3",res)
        const res2= res.json()
        console.log('res2 4',res2)
        res2.then(function(caracteres){
            console.log('caracteres de los paises  6',caracteres)
        })
        console.log(5)
    })   */

Pag
    .then(function (res) {
        return res.json()
    })
    .then(function (countries) {
        console.log('Countries', countries)

        countries.forEach(country => {
            const container = document.createElement('div')
            const name = document.createElement('h2')
            name.textContent = country.name.official
            const population = document.createElement('p')
            population.textContent = `Population: ${parseFloat(country.population).toLocaleString("en")}`
            const image = document.createElement('img')
            image.src = country.flags.png

            container.appendChild(name)
            container.appendChild(population)
            container.appendChild(image)

            document.body.appendChild(container)
        });

    })
    .catch(function (error) {
        const container = document.createElement('div')
        const name = document.createElement('h2')
        name.textContent = 'Error'
        const population = document.createElement('p')
        population.textContent = 'Se ha producido un error al cargar la página'
        const image = document.createElement('video')
        image.src = 'robot-error.webm'

        container.appendChild(name)
        container.appendChild(population)
        container.appendChild(image)

        document.body.appendChild(container)
    })
