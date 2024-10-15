import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useComments } from '../api/queries'

const Comments = () => {
    const [page, setPage] = useState(1);
    const { data: comments, isPending, isFetching, isError, error, isPlaceholderData } = useComments(page);

    const previousPageHandler = () => {
        setPage((prev) => Math.max(prev - 1, 1));
    }
    const nextPageHandler = () => {
        if (page < comments.total && !isPlaceholderData) {
            setPage((prev) => prev + 1);
        }
    }
    if (isPending) {
        return <span className='block font-bold text-center text-blue-500'>...Loading</span>
    }
    if (isError) {
        return <span className='block font-bold text-center text-red-400'>{error.message}</span>
    }
    return (
        <div className='w-4/5 max-w-4xl p-4 m-4 border-2 border-blue-700 rounded-lg shadow-lg sm:m-4 sm:p-6 bg-zinc-100'>
            <h2 className='text-2xl font-bold text-balance'>Comments List</h2>
            <Link to="/" className='block text-black hover:text-blue-500'>Go Back</Link>
            {
                <ul>
                    {comments?.data.map((comment) => (
                        <li key={comment.id}>
                            {comment.body}
                        </li>
                    ))}
                </ul>
            }

            <section className='w-full h-auto max-w-md mx-auto my-2'>
                {isFetching && <span className='block font-bold text-center text-blue-500'>Getting new data...</span>}
                <span className='block font-bold text-center text-blue-500'>Page {page}</span>
                <div className='flex items-center justify-evenly'>
                    <button className='p-2 text-white transition ease-in-out delay-150 bg-blue-500 border-2 border-transparent rounded-lg hover:scale-110 disabled:bg-gray-400' onClick={previousPageHandler} disabled={page === 1}>Previous</button>
                    <button className='p-2 text-white transition ease-in-out delay-150 bg-blue-500 border-2 border-transparent rounded-lg hover:scale-110 disabled:bg-gray-400' onClick={nextPageHandler} disabled={page === comments.total || isPlaceholderData}>Next</button>
                </div>

            </section>
        </div>
    )
}

export default Comments