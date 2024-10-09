import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, editPost } from "./postsApi";

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
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"])
        }
    })
}