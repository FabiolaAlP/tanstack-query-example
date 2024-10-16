import React from 'react'
import { usePosts } from '../api/queries'
import { Link } from 'react-router-dom';
const List = () => {
    const { data: posts, isPending, isError, error } = usePosts();
    if (isPending) {
        return <span className='block text-2xl text-center'>...Loading</span>
    }
    if (isError) {
        return <span className='block text-center text-red-500'>{error.message}</span>
    }
    return (
        <div className='w-4/5 max-w-4xl p-4 m-4 border-2 border-blue-700 rounded-lg shadow-lg sm:m-4 sm:p-6 bg-zinc-100'>
            <h2 className='text-2xl font-bold text-balance'>Post List</h2>
            {
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link className='hover:underline' to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            }
            <Link className='block text-left rounded-lg sm:text-right hover:text-green-600' to="/addPost">Create Post</Link>
            <Link className='block text-left rounded-lg sm:text-right hover:text-blue-500' to="/comments">Comments</Link>
            <Link className='block text-left rounded-lg sm:text-right hover:text-blue-500' to="/profiles">Profiles</Link>
        </div>
    )
}

export default List