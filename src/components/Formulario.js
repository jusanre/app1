import React from 'react';

class Formulario extends React.Component {
    // Referencias a elementos de formulario
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtrosRef = React.createRef();

    // State del componente
    state = {
        user: {}
    }

    recibirFormulario = (e) => {
        // Para que no se recargue el formulario
        e.preventDefault();

        let genero;
        if(this.generoHombreRef.current.checked){
            genero = this.generoHombreRef.current.value;
        }else if (this.generoMujerRef.current.checked){
            genero = this.generoMujerRef.current.value;
        }else{
            genero = this.generoOtrosRef.current.value;
        }
        let user = {
            nombre : (this.nombreRef.current.value),
            apellidos: (this.apellidosRef.current.value),
            bio: (this.bioRef.current.value),
            genero: genero
        }
        this.setState({
            user: user
        });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                    <h1>Formulario</h1>
                    
                    <form onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                        <div>
                            Nombre
                            <input type="text" name="nombre" ref={this.nombreRef} />
                        </div>

                        <div>
                            Apellidos
                            <input type="text" name="apellidos"  ref={this.apellidosRef} />
                        </div>

                        <div>
                            Biografia
                            <textarea name="bio"  ref={this.bioRef} ></textarea>
                        </div>

                        <div >
                            <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} defaultChecked /> Hombre
                            <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} /> Mujer
                            <input type="radio" name="genero" value="otro" ref={this.generoOtrosRef} /> Otro
                        </div>

                        <input type="submit" value="Enviar"/>

                    </form>
                    <hr/>
                    <div>
                        <h2>Datos del formulario</h2>
                        <p>Nombre: {this.state.user.nombre}</p>
                        <p>Apellidos: {this.state.user.apellidos}</p>
                        <p>Biografía: {this.state.user.bio}</p>
                        <p>Género: {this.state.user.genero}</p>
                    </div>

            </div>
        );
    }
}
export default Formulario;