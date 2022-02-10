import {createContext, useState, useEffect} from "react";
import axios from "axios";

//Crear Context
export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([]);
    const [busquedaReceta, setBusquedaReceta] = useState({
        nombre: '',
        categoria: ''
    });
    const [consultar, setConsultar] = useState(false);

    const {nombre, categoria} = busquedaReceta;

    useEffect(() => {
        if(consultar) {
            const obtenerReceta = async() => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                
                const response = await axios.get(url)
                setRecetas(response.data.drinks);
            }
            obtenerReceta();
        }
    }, [busquedaReceta])

    return (
        <RecetasContext.Provider
            value={{ 
                recetas,
                setBusquedaReceta,
                setConsultar,
             }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;