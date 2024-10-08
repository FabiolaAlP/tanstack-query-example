import React from 'react'
import { usePost } from '../api/queries'
import { useParams } from "react-router-dom";

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
        <section className='w-full max-w-md p-4 m-2 border-2 border-blue-600 rounded-lg sm:p-6 sm:m-4'>
            <h3 className='text-2xl text-balance'>{post.title}</h3>
            <span className='text-sm font-bold text-slate-400'>By: {post.author}</span>
            <p className='text-pretty'>
                {post.description}
            </p>
        </section>
    )
}

export default PostDetail