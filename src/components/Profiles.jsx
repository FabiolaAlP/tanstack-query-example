import { Link } from "react-router-dom"

const Profiles = () => {
    return (
        <div className='w-4/5 max-w-4xl p-4 m-4 border-2 border-blue-700 rounded-lg shadow-lg sm:m-4 sm:p-6 bg-zinc-100'>
            <h2 className='text-2xl font-bold text-balance'>Profiles</h2>
            <Link to="/" className='block text-black hover:text-blue-500'>Go Back</Link>
            {/* {
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link className='hover:underline' to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            } */}

        </div>
    )
}

export default Profiles