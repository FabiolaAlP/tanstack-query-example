import { useQuery } from "@tanstack/react-query";
import { fetchPosts, getPost } from "./postsApi";

export function usePosts() {
    return useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    })
}
export function usePost(id) {
    return useQuery({
        queryKey: ["post", id],
        queryFn: () => getPost(id),
        enabled: !!id //only if we have a post id run the query
    })
}