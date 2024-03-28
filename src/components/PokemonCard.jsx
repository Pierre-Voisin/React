function pokemonCard() {
    const pokemon = pokemonlist[0]
    
    
    
    return (
<figure>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt ="Bulbasaur"></img>
       <figcaption>Bulbasaur</figcaption>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt ={pokemon.name}></img> : <p>???</p>} 
       <figcaption>{pokemon.name}</figcaption>

    
</figure>
    );
    } 
    
    




    const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];




      export default pokemonCard;
