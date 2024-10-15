import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDeletePost } from '../api/mutations';
import { usePost } from '../api/queries';

const DeletePost = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { data: post, isError, error } = usePost(id);
    const { mutateAsync: deletePostMutation, isSuccess, isPending } = useDeletePost()
    useEffect(() => {
        if (isSuccess) {
            navigate("/")
        }
    }, [isSuccess, navigate])
    const handlePostDelete = async () => {
        try {
            await deletePostMutation(id);
        } catch (error) {
            throw error;
        }
    }
    return (
        <div className='w-4/5 max-w-4xl p-4 m-2 mx-auto border-2 border-blue-600 rounded-lg shadow-lg sm:p-6 sm:m-4 bg-zinc-100'>
            <Link to={`/posts/${post.id}`} className='block text-black hover:text-blue-500'>Go Back</Link>
            <h3 className='text-2xl text-balance'>{post.title}</h3>
            <span className='text-sm font-bold text-slate-500'>By: {post.author}</span>
            <p className='break-words text-pretty'>
                {post.description}
            </p>
            <span className='block text-lg font-bold'>Are you sure you want to delete this post?</span>
            <button
                className='p-2 border-2 border-red-400 rounded-lg hover:bg-red-500 hover:text-white'
                onClick={handlePostDelete}
                disabled={isPending}
            >
                {isPending ? 'Deleting...' : 'Delete Post'}
            </button>
            <section className='w-full h-auto max-w-md mx-auto my-2'>
                {isError && <span className='block font-bold text-center text-red-400'>{error.message}</span>}
                {isSuccess && <span className='block font-bold text-center text-green-500'>Post deleted successfully!</span>}
            </section>
        </div>
    )
}

export default DeletePost