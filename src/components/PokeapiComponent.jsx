import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { Loader } from "./Loader";

// los props son parametros que reciben los componentes para ser mas flexibles y reutilizables
export function PokeapiComponent(props) {
    console.log(props);
    const urlPokeapi = props.apiUrl
    const [pokemons, setPokemons] = useState([])


    useEffect(
        function(){
            async function getApi() {
                
                const response = await axios.get(urlPokeapi)
                setPokemons(response.data.results);
            }
            getApi()
                .then()
                .catch(function(error){
                    alert(error)
                })
           
        },
        [] // el array vacio indica que el useEffect se va a ejecutar una sola vez cuando se renderize el componente
    )

    /* operador ternario */
    // condicion 
    // ? retorna valor si cumple condicion
    // : retorna valor si no cumple condicion

    return(
        <View>
            {
                pokemons.length !== 0
                ? pokemons.map(pokemon => <Text>{pokemon.name}</Text>)
                : <Loader/>
            }
        </View>
    );
}