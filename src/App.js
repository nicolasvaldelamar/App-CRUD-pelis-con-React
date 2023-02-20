
function App() {
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
        
        <article className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">nicolasvaldelamar.dev</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">nicolasvaldelamar.dev</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">nicolasvaldelamar.dev</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">nicolasvaldelamar.dev</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>
    </section>

    <aside className="lateral">
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
                <input type="text" name="" id="" />
                <button>Buscar</button>
            </form>
        </div>
        <div className="add">
            <h3 className="title">Añadir peliculas</h3>
            <input type="text" placeholder="Titulo"/>
            <textarea placeholder="Descripcion"></textarea>
            <input type="submit" value="Guardar"/>
        </div>
    </aside>

    <footer className="footer">
        &copy; Máster en React
    </footer>
</div>
  );
}

export default App;
