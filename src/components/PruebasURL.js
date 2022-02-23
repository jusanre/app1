import { useParams } from 'react-router-dom';

const PruebasURL = () =>{

        const { id } = useParams();
        return(
            <h1>Recibido por la URL el id {id}</h1>
        );
}

export default PruebasURL;