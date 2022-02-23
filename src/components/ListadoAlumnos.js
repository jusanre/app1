import React from 'react';
import url from './Global';

class ListadoAlumnos extends React.Component {
    state = {
        alumnos: [],
        estadoAlumnos: false,
        alumnoElegido: {},
        estadoAlumnoElegido: false
    };
    
    // Para poder abortar las promesas cuando se desmonte el componente
    controller = new AbortController();

    componentWillUnmount(){
        this.controller.abort();
    }

    // Cargar todos los alumnos cuando se monte el componente
    componentDidMount() {
        fetch(url)
            .then(response => response.json()) // Primer then porque es una Promise
            .then(  // Segundo then para obtener el array
                data => {
                    // Ordeno el array por el campo nota
                    data.sort((a, b) => {
                        if (a.nota > b.nota) return -1;
                        if (a.nota < b.nota) return 1;
                        return 0;
                    });
                    this.setState({
                        alumnos: data,
                        estadoAlumnos: true
                    });
                }
            ).catch(error => {
                this.setState({
                    estadoAlumnos: false
                });
                alert(error);
            });
    }

    // Mostrar los datos de un sólo alumno (se necesita el id)
    muestraAlumno = (id) =>{
        this.setState({
            alumnoElegido: id
        });

        fetch(url+"/"+id)
        .then(response => response.json())
        .then(data => {
            this.setState({
                alumnoElegido: data,
                estadoAlumnoElegido : true
            });
        })
        .catch(error => {
            this.setState({
                estadoAlumnoElegido: false
            });
            alert(error);
        });
    }
    
    render() {
        if (this.state.alumnos.length > 0) {
            /* Si están cargados los alumnos tras la promesa inicial */
            return (
                <div>
                    <h1>Listado de alumnos</h1>
                    <table>
                        <tr><th>Nombre</th><th>Acciones</th></tr>
                        {
                            this.state.alumnos.map((a, i) =>
                                <tr key={i}>
                                <td key={i}>
                                    {a.nombre}
                                </td>
                                <td>
                                    <button onClick={()=>this.muestraAlumno(a.id)}>Ver nota</button>
                                    </td>
                                </tr>
                            )
                        }
                    </table>
                    {/* Datos de un alumno, sólo si se ha elegido previamente */}
                    {this.state.estadoAlumnoElegido &&
                        <div>
                            <h3>{this.state.alumnoElegido.nombre} ha sacado un {this.state.alumnoElegido.nota}</h3>
                        </div>
                    }
                </div>
            );
        } else if (this.state.alumnos.length === 0 && this.state.estadoAlumnos) {
             /* Si están cargados los alumnos, pero aún no hay datos */
            return (
                <div>
                    <h2>No hay alumnos para mostrar</h2>
                    <p>Todavía no hay contenido en esta sección</p>
                </div>
            );
        } else {
            // Si aún está cargando datos ...
            return (
                <div>
                    <h1>Cargando ...</h1>
                    {/* He insertado un svg de control de carga que me encontrado ;-)*/}
                    <svg width="75px" height="75px" viewBox="0 0 100 100">
                        <rect x="0" y="0" width="10" height="10" fill="#043a49">
                            <animate attributeName="x" from="0" to="50" dur="2s" repeatCount="indefinite" />
                        </rect>
                    </svg>
                    <p>Espere mientras carga el contenido</p>
                </div>
            );
        }

    }
}

export default ListadoAlumnos;