import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "./postsApi";

export function useCreatePost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newPost) => createPost(newPost),
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"])
        }
    })
}