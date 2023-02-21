import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";
import React, {useState} from "react";

function App() {

  const [pelis, setPelis] = useState([])



  return (
    <div className="layout">
       
        <header className="header">
            <div className="logo">
                <div className="play">

                </div>
            </div>
            <h1>MisPelis</h1>
        </header>

     
        <nav className="nav">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Peliculas</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contacto</a></li>
            </ul>
        </nav>
    

    
    <section className="content">
        <Listado
            pelis = {pelis} 
            setPelis = {setPelis}
        />
    </section>

    <aside className="lateral">
        <Buscador/>
        <Crear setPelis = {setPelis}/>
    </aside>

    <footer className="footer">
        &copy; Máster en React
    </footer>
</div>
  );
}

export default App;
