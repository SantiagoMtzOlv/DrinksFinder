import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state
    const [idReceta, setIdReceta] = useState(null);
    const [recetaFull, setRecetaFull] = useState({})

    useEffect(() => {
        const obtenerReceta = async() =>{
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const response = await axios.get(url);
            setRecetaFull(response.data.drinks[0])
        }
        obtenerReceta();
    }, [idReceta])

    return(
        <ModalContext.Provider
            value={{ 
                recetaFull,
                setRecetaFull,
                setIdReceta,
             }}
        >
            {props.children}
        </ModalContext.Provider>
    )

}
export default ModalProvider;
