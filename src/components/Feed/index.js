import { Fragment } from 'react';
import { ErrorAlert } from "../ErrorAlert"
import { Loading } from "../Loading"
import { Image } from "../Image"
import { useFetch } from "../useFetch"

// Componente que renderiza o Feed
export const Feed = ({endpoint}) => {
    
    let fetch = useFetch(endpoint)
    const {data} = fetch

    return (
        <div className='container'>
            <div className='row'>

            {/* Alerta de erro */}
            { fetch.error && <ErrorAlert message={fetch.error}/>}

            {/* Loader */}
            { fetch.loading && <Loading/>}

            {!fetch.loading && !fetch.error && fetch.data &&
                // Fragment pois retornamos múltiplos elementos
                <Fragment>
                {data.map((content) =>{
                    // O atributo key é necessário para gerenciamento de listas pelo React
                    return <Image key={content._id} content={content}/>
                })}
                </Fragment>
            }
            </div>
        </div>
    );
}