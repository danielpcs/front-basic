import { Fragment } from 'react';
import { ErrorAlert } from "../ErrorAlert"
import { Loading } from "../Loading"
import { Image } from "../Image"
import { useFetch } from "../useFetch"

// Componente que renderiza o Feed
export const Feed = ({endpoint}) => {
    
    let fetch = useFetch(endpoint)
    const {data, error, loading} = fetch

    return (
        <div className='container'>
            <div className='row'>

            {/* Alerta de erro */}
            { error && <ErrorAlert message={error}/> }

            {/* Loader */}
            { loading && <Loading/> }

            {/* Imagens do Feed */}
            { data &&
                // Fragment pois retornamos múltiplos elementos
                <Fragment>
                    {data.map((content) =>{
                        // O atributo key é utilizado para gerenciamento de listas pelo React
                        return <Image key={content._id} content={content}/>
                    })}
                </Fragment>
            }

            </div>
        </div>
    );
}