import React, {useState} from 'react';

const Pokemon = () => {

    const [allPokemon, setAllPokemon] = useState([])

    const getPokemonInfo = () => {


        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
            .then((response) => {
                return response.json();
            }).then(response => {
            console.log("response is->", response);
                 setAllPokemon(response.results)
        }).catch(err => {
            console.log(err);
        });

    }
    return (
        <div>
            {/*<h1>{allPokemon[0].name}</h1>*/}
            <h3>Here are all the Pokemon</h3>
            <button onClick={getPokemonInfo}>Fetch Pokemon</button>
            {
                allPokemon.map((pokemon, i) => {
                    return (
                        <div key={i}>
                            <h3>{pokemon.name}</h3>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Pokemon;