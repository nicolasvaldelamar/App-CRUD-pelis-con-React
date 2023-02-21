import React, { useState } from 'react'

export const Buscador = ({ pelis, setPelis }) => {

    const [busqueda, setBusqueda] = useState("")
    const [noEncontrado, setNoEncontrado] = useState(false)

    const buscarPeli = (e) => {
        //Crear estado y actualizarlo
        setBusqueda(e.target.value)


        //Filtrar para buscar coincidencias
        let pelis_encontradas = pelis ? pelis.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
        }) : ""

        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
            setNoEncontrado(true)
        } else {
            setNoEncontrado(false)
        }

        //Actualizar estado del listado principal con lo que he logrado filtrar

        setPelis(pelis_encontradas)
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            {(noEncontrado === true && busqueda.length > 1) && (
                <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            )}
            <form>
                <input type="text" name="busqueda" id="search_field" autoComplete='off' onChange={buscarPeli} />
                <button>Buscar</button>
            </form>
        </div>
    )
}
