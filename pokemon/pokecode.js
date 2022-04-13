const getAPIData = async (url) => {
    try {
     const result = await fetch(url)
     const data = await result.jason()
     console.log(data)
    } catch (error){
    console.errror(error)
    }
}

getAPIData ('https://pokeapi.co/api/v2/pokemon/snorlax')