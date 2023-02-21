import React, { useEffect, useState } from 'react'
import { ExtraerDelStorage } from '../helpers/ExtraerDelStorage'
import { Editar } from './Editar'

export const Listado = ({pelis, setPelis}) => {
  

  //const [pelis, setPelis] = useState([])
  const [editar, setEditar] = useState(0)

  useEffect(()=>{
    sacarPelis();
  }, [])

  const sacarPelis = () => {
     setPelis(ExtraerDelStorage('pelis'))

    
  }
 
  const borrarPeli = (id)=>{
      //Conseguir peliculas almacenadas
      let pelis_almacenadas = ExtraerDelStorage('pelis');

      //Filtrar esas peliculas para que elimine del array la que no quiero
      let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))

      console.log(pelis_almacenadas, nuevo_array_pelis)
      //Actualizar estado del listado
      setPelis(nuevo_array_pelis)

      //Actualizar los datos en el localStorage
      localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis))
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
                    <button className="edit" onClick={()=>{
                      setEditar(peli.id)
                    }}>Editar</button>
                    <button className="delete" onClick={()=> borrarPeli(peli.id)}>Borrar</button>

                    {/**Aparece formulario de editar */}
                    {editar === peli.id && (
                      <Editar
                        peli = {peli}
                        setEditar = {setEditar}
                        setPelis = {setPelis}
                      />
                    )}
                    </article>
                 )
            }): <h2>No hay peliculas para mostrar</h2>
        }
         
        
    </>
  )
}
