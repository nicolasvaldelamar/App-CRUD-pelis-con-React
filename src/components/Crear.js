import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

export const Crear = ({setPelis}) => {

    const tituloComponente = "Añadir pelicula"
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    })

    const {titulo, descripcion} = peliState

    const conseguirDatosForm = e =>{
        e.preventDefault()
        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value
        let descripcion = target.descripcion.value
        

        //Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        //Guardar estado
        setPeliState(peli)
        
        //Actualizar el estado del listado principal
        setPelis(elementos => {
            return [...elementos, peli]
        })

        //Guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli)

        


    }

   


    return (

        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>

            {(titulo && descripcion) && "Has creado la pelicula: "+titulo}

            </strong>
            <form onSubmit={conseguirDatosForm}>
                <input
                        type="text" 
                        id='titulo'
                        name='titulo'
                        placeholder="Titulo" />
                <textarea 
                    placeholder="Descripcion"
                    id='descripcion'
                    name='descripcion'
                    ></textarea>
                <input type="submit" value="Guardar" id='save'/>
            </form>
        </div>
    )
}
