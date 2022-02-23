import React, { Component } from 'react';
//import Hijo from './Hijo';
//import Pruebas2 from './Pruebas2';
import Pruebas3 from './Pruebas3';

class Pruebas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            mensajeHijo: [],
            capricho: ''
        }
    }

    HolaMundo = () => {
        return "Hola, Mundo";
    }

    Incrementar = () => {
        console.log("Estoy en Incrementar")
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    Decrementar = () => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
    // Método para insertar un elemento en el array de mensajes
    MensajeDelHijo = (e) => {
        var array = this.state.mensajeHijo;
        array.push(e);
        this.setState({
            mensajeHijo : array
        });
        console.log(this.state);
    }

    render() {
        /*let datos = {
            ciudad: 'Jimena de la Frontera',
            fechaNacimiento: '1965-08-11'
        */

        const capricho = (e) => {
            this.setState({
                capricho : e 
            });
        };
        return (
                        <div>
                <h1>Componente PADRE</h1>
                <p>{this.HolaMundo()}</p>
                <p>El contador vale {this.state.contador}</p>
                <p>
                    <input type="button" value="Incrementar" onClick={this.Incrementar} />
                    <input type="button" value="Decrementar" onClick={this.Decrementar} />
                </p>
                <ul>El mensaje del hijo es {this.state.mensajeHijo.map((m,i)=><li key={i}>{m}</li>)}</ul>
                <p>El último capricho del hijo es: {this.state.capricho}</p>
                <hr />
                {/*
                <Hijo apellidos="Rey Gómez"
                    nombre="Pepito"
                    datos={datos}
                    onMensajeDelHijo={this.MensajeDelHijo}
                    onIncrementarContador={this.Incrementar}
                />*/}
                <hr />
                {/*<Pruebas2 a={1} b="Juana" onQuiero={capricho} />*/}
                <Pruebas3 onQuiero={capricho} />
            </div>
        );
    }
}

export default Pruebas;
