import React, { Component } from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
// Componentes para usar en las rutas
import Receta from './Receta';
import Pruebas from './Pruebas';
import ListadoAlumnos from './ListadoAlumnos';
import ErrorRuta from './ErrorRuta';
import Home from './Home';
import PruebasURL from './PruebasURL';
import Formulario from './Formulario';

class Rutas extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                    <NavLink to="/home" >Home</NavLink>
                    <NavLink to="/receta" >Receta</NavLink>
                    <NavLink to="/pruebas" >Pruebas</NavLink>
                    <NavLink to="/pruebasurl/77" >Pruebas con parámetro</NavLink>
                    <NavLink to="/formulario" >Formulario</NavLink>
                    <NavLink to="/alumnos" >Listado de alumnos</NavLink>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/receta" element={<Receta />} />
                    <Route exact path="/pruebas" element={<Pruebas />} />
                    <Route path="/pruebasurl/:id" element={<PruebasURL />} />
                    <Route exact path="/formulario" element={<Formulario />}></Route>
                    <Route exact path="/alumnos" element={<ListadoAlumnos />} />
                    <Route path="*" element={<ErrorRuta />} />
                </Routes>
            </BrowserRouter>

        );
    }
}

export default Rutas;