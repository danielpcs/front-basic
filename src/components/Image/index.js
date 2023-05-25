import { ImageOverlay } from '../ImageOverlay';
import './styles.css';


// Componente utilizado para renderizar a imagem com overlay
export const Image = ({content, ...props}) => {

    // Destructuring dos dados recebidos
    const {
        imagens: {
            thumbnail: {url: thumbUrl},
            resolucaoMedia: {url:mediumUrl},
            resolucaoPadrao: {url: bigUrl}
        },
        legenda,
    } = content;
    
    
    return (
        <div className='col-8 col-xs-8 col-sm-8 col-md-6 col-lg-4 animate__animated animate__fadeIn mx-0 my-2 px-2' {...props}>
            <img
                className='img feed-image'
                srcSet={`${thumbUrl} 150w, ${mediumUrl} 320w, ${bigUrl} 640w`}
                sizes='(max-width: 576px) 150px, (max-width: 768px) 320px, 640px'
                alt={legenda}
            />
            <ImageOverlay content={content}/>
        </div>
    );

}