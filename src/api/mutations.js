import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, editPost } from "./postsApi";

export function useCreatePost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newPost) => createPost(newPost),
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"])
        }
    })
}

export function useEditPost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, updatedPost }) => editPost(id, updatedPost),
        onSuccess: (id) => {
            queryClient.invalidateQueries(["posts"]),
                queryClient.invalidateQueries(["post", id])
        }
    })
}

export function useDeletePost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => deletePost(id),
        onSuccess: (data, id) => {
            queryClient.invalidateQueries(["posts"]),
                queryClient.invalidateQueries(["post", id])
        }
    })
}