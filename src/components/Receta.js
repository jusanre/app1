import React, {Component} from 'react';
import BuenProvecho from './BuenProvecho';

class Receta extends Component{
    render(){
        let receta = {
            nombre: 'Tortilla de patatas',
            ingredientes: [
                'Patatas',
                'Huevos',
                'Cebolla',
                'Aceite',
                'Sal'
            ],
            calorias: 190000,
            pais : "España" 
        };
        return(
            <div className="receta">
                <h1>{receta.nombre}</h1>
                <h2>{'País: '+receta.pais}</h2>
                <h3>Valor energético: {receta.calorias} calorías / {receta.calorias/1000} Kilocalorías</h3>
                <h3>Ingredientes</h3>
                <ul>
                {   // Uso de alternativa (operador ternario):
                    receta.ingredientes.length ? 
                    // Uso de repetitiva (map, forEach, reduce, ...):
                    receta.ingredientes.map((ingrediente,indice) => {
                        return <li key={indice}>{ingrediente}</li>
                    })
                    : <p>Esta receta no tiene ingredientes</p>
                }
                </ul>
                <BuenProvecho/>
            </div>        
        );
    }
}
export default Receta;