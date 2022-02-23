import React, { Component } from 'react';

class Pruebas3 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            Mensaje: 'Me he comido dos naranjas',
            capricho: 'una bicicleta'
        }
    }

    cambiarCapricho = () => {
        this.setState({
            capricho: 'Una moto'
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Prueba 3</h1>
                <h2>{this.state.capricho}</h2>
                <button onClick={() => this.cambiarCapricho()}>Cambiar mensaje</button>
                <button onClick={() => this.props.onQuiero(this.state.capricho)}>Pedir al padre</button>
            </div>
        );
    }
}

export default Pruebas3;
