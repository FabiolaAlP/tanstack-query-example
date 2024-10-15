import React from 'react'
import { useForm } from "react-hook-form";
import { useCreatePost } from '../api/mutations';
import { Link } from 'react-router-dom';

const PostForm = () => {
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({ mode: "onTouched" })
    const { mutateAsync: createPostMutation, isError, isPending, isSuccess, error } = useCreatePost();
    const onSubmit = async (data) => {
        try {
            await createPostMutation(data);
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <div className='w-4/5 max-w-4xl p-6 mx-auto mt-24 mb-6 border-2 border-blue-600 rounded-lg shadow-lg bg-zinc-100 sm:mt-14'>
            <Link to="/" className='block text-black hover:text-blue-500'>Go Back</Link>
            <form className='flex flex-col justify-center gap-6 p-2 sm:p-4' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">
                    <input placeholder='Title' className='w-full py-2 rounded-lg indent-2' type="text" {...register("title", { required: "Title is required" })} />
                </label>
                {errors.title ? (
                    <span className="mt-2 text-xs font-medium text-red-400">{errors.title.message}</span>
                ) : (
                    touchedFields.title && !errors.title && (
                        <span className="mt-2 text-xs font-medium text-green-500">Title looks good!</span>
                    )
                )}
                <label htmlFor="author">
                    <input placeholder='Author' className='w-full py-2 rounded-lg indent-2' type="text" {...register("author", { required: "Author is required" })} />
                </label>
                {errors.author ? (
                    <span className="mt-2 text-xs font-medium text-red-400">{errors.author.message}</span>
                ) : (
                    touchedFields.author && !errors.author && (
                        <span className="mt-2 text-xs font-medium text-green-500">Author looks good!</span>
                    )
                )}
                <label htmlFor="description">
                    <textarea placeholder='Description' className='w-full rounded-lg indent-2' rows={4} type="text" {...register("description")} />
                </label>
                <button type='submit' disabled={createPostMutation.isPending} className='p-4 text-white bg-blue-700 rounded-lg'>Add Post</button>
            </form>
            <section className='w-full h-auto max-w-md mx-auto my-2'>
                {isPending && <span className='block font-bold text-center text-blue-500'>Sending data...</span>}
                {isError && <span className='block font-bold text-center text-red-400'>{error.message}</span>}
                {isSuccess && <span className='block font-bold text-center text-green-500'>Post added successfully!</span>}
            </section>
        </div>
    )
}

export default PostForm