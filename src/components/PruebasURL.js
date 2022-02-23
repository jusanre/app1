import { useParams } from 'react-router-dom';

const PruebasURL = () =>{

        const { parametro } = useParams();
        return(
            <h1>Recibido por la URL el id {parametro}</h1>
        );
}

export default PruebasURL;