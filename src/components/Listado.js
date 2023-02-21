import React, { useEffect, useState } from 'react'
import { ExtraerDelStorage } from '../helpers/ExtraerDelStorage'

export const Listado = ({pelis, setPelis}) => {
  

  //const [pelis, setPelis] = useState([])

  useEffect(()=>{
    sacarPelis();
  }, [])

  const sacarPelis = () => {
     setPelis(ExtraerDelStorage('pelis'))

  }
 


  return (
    <>
        {
          pelis != null ?
              pelis.map(peli => {
                 return (
                   <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                    </article>
                 )
            }): <h2>No hay peliculas para mostrar</h2>
        }
         
        
    </>
  )
}
