import React from 'react';
class MiComponente2 extends React.Component{
    render(){
        // El método render() puede tener variables y métodos
        let miVariable = 100;
        return(
        <div>
            <p>Soy MiComponente2 y he recibido {this.props.nombre} y {this.props.edad}</p>
            <p>Mi variable vale {miVariable}</p>
        </div>    
        );        
    }
}

export default MiComponente2;