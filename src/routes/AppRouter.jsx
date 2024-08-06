import { useState } from "react";
/* import { Route, Router, Routes } from "react-router-dom" */

export const AppRouter = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        const htmlElement = document.querySelector('html');
        htmlElement.setAttribute('data-bs-theme',
            darkMode ? 'light' : 'dark');
        const navElement = document.querySelector('nav');
        navElement.setAttribute('data-bs-theme',
            darkMode ? 'dark' : 'light');
        navElement.classList.toggle('dark-mode', !darkMode);
    };
    return (
        <>
            <header>
                <div className={`container App ${darkMode ? 'theme-dark' : 'theme-light'}`}>
                    <nav className={`navbar navbar-expand-md fixed-top ${darkMode ? 'bg-success' : 'bg-primary'}`} data-bs-theme="dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img src="/src/assets/Market.png" alt="Logo" width="50" height="50" className="d-inline-block me-2" />
                                Bootstrap
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarScroll">
                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" id="nav-scroll">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Articulos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Acerca de</a>
                                    </li>
                                </ul>
                                <button type="button" className={`btn ${darkMode ? 'btn-outline-warning' : 'btn-outline-dark'}`} onClick={toggleTheme}>
                                    {darkMode ? (<i className="bi bi-brightness-high-fill"></i>) : (<i className="bi bi-moon-stars-fill"></i>)}

                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* Menú de Navegación */}

            {/* Configurar rutas
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                                <Route path="/Inicio" element={<Home />} />
                                <Route path="/Inicio" element={<Home />} />
                                <Route path="/Inicio" element={<Home />} />
                                <Route path="/Inicio" element={<Home />} />
                                <Route path="*" element={<NotFound />} />
                            </Route>
                        </Routes>*/}
        </>

    )
}
