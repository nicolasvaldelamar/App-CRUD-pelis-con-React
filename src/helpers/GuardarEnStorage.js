export const GuardarEnStorage = (clave, item) =>{
    // Conseguir los elementos que ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem(clave))
    console.log(elementos)
    //Comprobar si es un array
    if(Array.isArray(elementos)){
        //Guardar dentro del array un elemento nuevo
        elementos.push(item)
    }else{
        //Crear un array con la nueva peli
        elementos = [item]
    }  
    //Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos))

    //Devolver objeto guardado
    return item
}    
