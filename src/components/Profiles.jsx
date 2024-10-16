import { Link } from "react-router-dom";
import { useProfiles } from "../api/queries";

const Profiles = () => {
    const {
        data,
        status,
        isFetching,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        error
    } = useProfiles();

    if (status === "loading") {
        return <span className='block font-bold text-center text-blue-500'>...Loading</span>;
    }

    if (status === "error") {
        return <span className='block text-center text-red-500'>{error.message}</span>;
    }

    return (
        <div className='w-4/5 max-w-4xl p-4 m-4 border-2 border-blue-700 rounded-lg shadow-lg sm:m-4 sm:p-6 bg-zinc-100'>
            <h2 className='text-2xl font-bold text-balance'>Profiles</h2>
            <Link to="/" className='block text-black hover:text-blue-500'>Go Back</Link>

            {data?.pages.map((group, index) => (
                <div key={index}>
                    {group.data.map((profile) => (
                        <section key={profile.id}>
                            <span className='text-sm font-bold text-slate-500'>By: {profile.name}</span>
                            <span className='text-sm font-bold text-slate-500'>Email: {profile.email}</span>
                            <p className='break-words text-pretty'>
                                {profile.bio}
                            </p>
                        </section>
                    ))}
                </div>
            ))}

            <section className='w-full h-auto max-w-md mx-auto my-2 text-center'>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                    className="p-2 text-center text-white transition ease-in-out delay-150 bg-blue-500 border-2 border-transparent rounded-lg hover:scale-110 disabled:bg-gray-400"
                >
                    {isFetchingNextPage ? "Loading more" : hasNextPage ? "Load more" : "Nothing more to load"}
                </button>
            </section>
        </div>
    );
};

export default Profiles;
