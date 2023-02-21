export const ExtraerDelStorage = (clave)=>{
    let elementos = JSON.parse(localStorage.getItem(clave))
    if(Array.isArray(elementos)){
        return elementos;
    }else{
        console.log("No hay nada en el localStorage con clave: "+clave)
    }
    
}