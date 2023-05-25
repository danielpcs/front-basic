// Componente para logotipo
export const Logo = ({image, ...props}) => {
    return (
        <header className='my-3 text-center'>
            <img src={image} className='image-fluid' alt='Logo Squid' {...props} />
        </header>
    );
}