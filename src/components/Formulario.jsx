import {useContext, useState} from 'react';

import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    const { setBusquedaReceta, setConsultar } = useContext(RecetasContext);

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    //funcion para leer los datos
    const obtenerContenido = e => {

        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const buscarReceta = e => {
        e.preventDefault();
        setBusquedaReceta(busqueda);
        setConsultar(true);
    }

    return (
        <form 
            className='col-12'
            onSubmit={buscarReceta}
        >
            <fieldset className='text-center'>
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text" 
                        name="nombre" 
                        id="nombre"
                        className='form-control'
                        placeholder='Buscar por Ingrediente'
                        onChange={obtenerContenido}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        name="categoria" 
                        id="categoria"
                        className='form-control'
                        onChange={obtenerContenido}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {
                            categorias.map(item => (
                                <option key={item.strCategory} value={item.strCategory}>{item.strCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        className='btn btn-block btn-primary'
                        value="Buscar Bebidas" 
                    />
                </div>
            </div>
        </form>
    )
};

export default Formulario;
