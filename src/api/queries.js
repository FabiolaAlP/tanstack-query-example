import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchComments, fetchPosts, getPost } from "./postsApi";

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
//this is for a paginated Query (we have to use placeholderData and import keepPreviousData)
export function useComments(_page,) {
    return useQuery({
        queryKey: ["comments", _page],
        queryFn: () => fetchComments(_page,),
        placeholderData: keepPreviousData
    })
}