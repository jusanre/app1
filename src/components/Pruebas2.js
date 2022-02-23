const Pruebas2 = (mensajeDelPadre) => {
    console.log(mensajeDelPadre);
    let {a, b, onQuiero} = mensajeDelPadre;
    let titulo = "Prueba 2";

    var mensaje = "Una bicicleta :-)";
    const cambiarMensaje = (capricho) => {
        mensaje = capricho;
    }
    // NO FUNCIONA PORQUE MENSAJE NO FORMA PARTE DEL STATE !!!!!
    return(
        <div>
        <h1>{titulo}</h1>
        <p>{a},{b}</p>
        <button onClick={()=>cambiarMensaje('Una moto')}>Cambiar mensaje</button>
        <button onClick={()=>onQuiero(mensaje)}>Pedir al padre {mensaje}</button>
        </div>
    );
};
export default Pruebas2;