import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "../components/Home";

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
        <Router>
            {/* Menú de Navegación */}
            <header>
                <div className={`container ${darkMode ? 'theme-dark' : 'theme-light'}`}>
                    <nav className={`navbar navbar-expand-md fixed-top ${darkMode ? 'bg-success' : 'bg-primary'}`} data-bs-theme="dark">
                        <div className="container-fluid">
                            <NavLink to='/' className="navbar-brand">
                                <img src="/src/assets/Market.png" alt="Logo" width="50" height="50" className="d-inline-block me-2" />
                                Bootstrap
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarScroll">
                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" id="nav-scroll">
                                    <li className="nav-item">
                                        <NavLink to='/' className="nav-link active" aria-current="page" >Inicio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/Home' className="nav-link" >Articulos</NavLink>
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


            {/* Configurar rutas*/}

            <Routes>

                <Route path='/' element={<div className="content"><Home /></div>}></Route>
                <Route path='/Home' element={<div className="content"><Home /></div>}></Route>

            </Routes>
        </Router>
    )
}
