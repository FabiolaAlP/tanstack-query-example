import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    return (
        <div className='w-4/5 max-w-4xl p-6 mx-auto bg-gray-800 border-2 rounded-lg border-amber-900'>
            <h1 className='text-white underline text-balance'>Opps!</h1>
            <p className="text-white text-pretty">Sorry, an unexpected error has occured.</p>
            <p className='text-white text-pretty'>{error.statusText || error.message}</p>
        </div>

    )
}

export default Error