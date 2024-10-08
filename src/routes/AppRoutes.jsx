import Error from "../components/Error"
import List from "../components/List"
import PostDetail from "../components/PostDetail"
import App from "../App"
import { Navigate } from "react-router-dom"
import PostForm from "../components/PostForm"

const AppRoutes = [{
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [{ path: "/posts", element: <List /> },
    { path: "/posts/:id", element: <PostDetail /> },
    { path: "/addPost", element: <PostForm /> },
    ],
},
{ path: '*', element: <Navigate to="/" /> },
]


export default AppRoutes