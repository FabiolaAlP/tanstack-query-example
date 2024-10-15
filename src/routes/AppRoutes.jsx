import Error from "../components/Error"
import List from "../components/List"
import PostDetail from "../components/PostDetail"
import App from "../App"
import { Navigate } from "react-router-dom"
import PostForm from "../components/PostForm"
import EditPost from "../components/EditPost"
import DeletePost from "../components/DeletePost"
import Comments from "../components/Comments"

const AppRoutes = [{
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
        { path: "", element: <List /> },
        // { path: "/posts", element: <List /> },
        { path: "posts/:id", element: <PostDetail /> },
        { path: "addPost", element: <PostForm /> },
        { path: "editPost/:id", element: <EditPost /> },
        { path: "deletePost/:id", element: <DeletePost /> },
        { path: "comments", element: <Comments /> },
    ],
},
{ path: '*', element: <Navigate to="/posts" /> },
]


export default AppRoutes