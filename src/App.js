import logo from './logo.svg';
import { Fragment } from 'react';
import { ErrorAlert, Image, Loading, useFetch } from './components';

function App() {

  // Realiza o fetch da variável de ambiente REACT_APP_FEED_API 
  let fetch = useFetch(process.env.REACT_APP_FEED_API)
  const {data} = fetch
  

  return (
    <div className='App'>
      
      {/* Logo */}
      <header className='my-3 text-center'>
        <img src={logo} className='image-fluid' alt='Logo Squid' />
      </header>

      <div className='container'>
        <div className='row'>

          { fetch.error && <ErrorAlert message={fetch.error}/>}

          
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

    </div>
  );
}

export default App;
