import React, {useState} from 'react';
import axios from "axios";

const Pokemon = () => {

    const [allPokemon, setAllPokemon] = useState([])

    const getPokemonInfo = () => {

        //Axios
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
            .then(response =>{
                console.log("response using axios!!! -->", response.data.results)
                setAllPokemon(response.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    return (
        <div>
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