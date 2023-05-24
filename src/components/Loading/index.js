// Loader
export const Loading = ({...props}) => {
    return (
        <div className='col-24 text-center'>
            <div className='loader my-3' role='status'{...props}>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    )
}