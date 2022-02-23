import React from "react";

const Home = () => {
    const saludo = "Hola, alumnos :-)";
    return(
        <React.Fragment>
            <h1>Página principal</h1>
            <h3>{saludo}</h3>
        </React.Fragment>
    );
}
export default Home;