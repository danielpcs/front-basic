// Alerta de erro contendo mensagem de erro
export const ErrorAlert = ({message, ...props}) => {
    return <div className='box background-red white' {...props}>{message}</div>
}