import React, {Component} from "react";

class Hijo extends Component{

    componentDidCatch(error,info){
        console.log("Se ha producido un error en el renderizado. Error: "+error+"Info: "+info);
    }

    componentDidMount(){
        console.log("Se acaha de montar el componente Hijo. Buen sitio para realizar peticiones HTTP");
    }
    
    componentDidUpdate(){
        console.log("Se interactuado con el componente");
    }
    componentWillUnmount(){
        console.log("Se va a desmontar el componente Hijo. Buen sitio para \"limpiar\" recursos. Por ejemplo, cuando se cambie el routing");
    }

    shouldComponentUpdate(){
        console.log("Se va a producir un cambio en el renderizado. Podríamos establecer flags para que no se produzca el cambio")
        return false;
    }
    
    render() {
        // Extraemos las props de datos
        const {nombre,apellidos,datos} = this.props;
        // Extraemos las props de funciones
        const {onMensajeDelHijo, onIncrementarContador} = this.props;
        
        let mensaje = "Uno";
        return (
            <div>
                <h1>Componente HIJO</h1>
                {/* Datos del padre al hijo */}
                <p>He recibido del padre el nombre <strong>{nombre}</strong></p>
                <p>He recibido del padre los apellidos <strong>{apellidos}</strong></p>
                <div>He recibido del padre los datos extra siguientes:  
                    <ul>
                        <li>{datos.ciudad}</li>
                        <li>{datos.fechaNacimiento}</li>
                    </ul>
                </div>
                {/* Datos del hijo al padre*/}
                <p></p>
                <button onClick={() => onMensajeDelHijo(mensaje)}>Enviar mensaje al PADRE</button>
                <button onClick={onIncrementarContador}>Incrementar contador del PADRE</button>
            </div>
        );
        }
}

export default Hijo;