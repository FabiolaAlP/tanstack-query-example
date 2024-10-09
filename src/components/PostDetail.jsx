import React from 'react'
import { usePost } from '../api/queries'
import { useParams, Link } from "react-router-dom";

const PostDetail = () => {
    const { id } = useParams();
    const { data: post, isPending, isError, error } = usePost(id);
    if (isPending) {
        return <span className='block text-2xl text-center'>...Loading</span>
    }
    if (isError) {
        return <span className='block text-center text-red-500'>{error.message}</span>
    }
    return (
        <section className='w-4/5 max-w-4xl p-4 m-2 mx-auto border-2 border-blue-600 rounded-lg shadow-lg sm:p-6 sm:m-4 bg-zinc-100'>
            <Link to="/posts" className='block text-black hover:text-blue-500'>Go Back</Link>
            <h3 className='text-2xl text-balance'>{post.title}</h3>
            <span className='text-sm font-bold text-slate-500'>By: {post.author}</span>
            <p className='text-pretty'>
                {post.description}
            </p>
        </section>
    )
}

export default PostDetail