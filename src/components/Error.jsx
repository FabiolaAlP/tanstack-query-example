import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    return (
        <div className='w-4/5 max-w-4xl p-6 mx-auto mt-4 border-2 border-blue-700 rounded-lg bg-zinc-100'>
            <h1 className='text-black underline text-balance'>Opps!</h1>
            <p className="text-black text-pretty">Sorry, an unexpected error has occured.</p>
            <p className='text-black text-pretty'>{error.statusText || error.message}</p>
        </div>

    )
}

export default Error