import {createContext, useState, useEffect} from "react";

import axios from "axios";

//Crear Context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //Crear el state de las categorias
    const [categorias, setCategorias] = useState([]);

    //ejecutar consulta al api
    useEffect(() => {
        const obtenerCategorias = async  () => {

            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await axios.get(url);
            setCategorias(categorias.data.drinks);
        }

        obtenerCategorias();
    }, [])

    return (
        <CategoriasContext.Provider
            value={{ 
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;