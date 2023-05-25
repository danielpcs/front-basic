import './styles.css';


// Componente utilizado para renderizar a imagem com overlay
export const Image = ({content, ...props}) => {

    // Função que formata a data para dd/mm/yyyy hh:mm
    const formatDate = (date) =>{

        // Configurações para o Date.toLocaleString que permite
        // ter valores com zero na frente sem lidar com strings
        const config = {
			day:'2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		};

        let formattedDate = new Date(date)
        
        // Obtém a data no formato 'dd/mm/yyyy, hh:mm'
        formattedDate = formattedDate.toLocaleString('pt-BR', config)
        
        // Remove a vírgula. Utilizei split e join por ter melhor performance
        // que o replace e por ainda ser de fácil entendimento
        formattedDate = formattedDate.split(',').join('')

        return formattedDate
    }

    // Destructuring dos dados recebidos
    const {
        imagens: {
            thumbnail: {url: thumbUrl},
            resolucaoMedia: {url:mediumUrl},
            resolucaoPadrao: {url: bigUrl}
        },
        link,
        upvotes,
        comentarios,
        criadoEm,
        legenda,
        usuario: {username: user}
    } = content;
    
    
    return (
        <div className='col-8 col-xs-8 col-sm-8 col-md-6 col-lg-4 animate__animated animate__fadeIn mx-0 my-2 px-2' {...props}>
            <img
                className='img feed-image'
                srcSet={`${thumbUrl} 150w, ${mediumUrl} 320w, ${bigUrl} 640w`}
                sizes='(max-width: 576px) 150px, (max-width: 768px) 320px, 640px'
                alt={legenda}
            />
            <a href={link} target='_blank' rel="noreferrer" className='position-absolute .animate__zoomIn display-flex justify-content-center overlay mx-2 px-2 text-center'>
                    <div className='text-thin'> @{user} </div>
                    <div className='text-thin'> <i className='fa-solid fa-heart mr-1'/> {upvotes} </div>
                    <div className='text-thin'> <i className='fa-solid fa-comment mr-1'/> {comentarios} </div>
                    <div className='text-thin'> <i className='fa-solid fa-calendar-days mr-1'/> {formatDate(criadoEm)} </div>
            </a>
        </div>
    );

}