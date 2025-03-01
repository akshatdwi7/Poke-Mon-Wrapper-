// fetch("https://pokeapi.co/api/v2/pokemon/ditto")


async function fetchData() { // Also fixed typo in function name
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("Could not fetch the data")
        }
        const data = await response.json();
       const pokemonSprite = data.sprites.front_default;
       const imgElement = document.getElementById("pokemonSprite")
       imgElement.src = pokemonSprite;
       imgElement.style.display="block"
    }
    catch (error) {
        console.error(error)
    }
}

// Using corrected function name
