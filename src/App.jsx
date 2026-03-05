import { createHashRouter, HashRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import AboutMe from "./pages/AboutMe.jsx";
import Layout from "./components/Layout.jsx";
import MyProjects from "./pages/MyProjects.jsx";
import Interest from "./pages/Interest.jsx";

const router = createHashRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <AboutMe/>
            },
            {
                path: "/my-projects",
                element: <MyProjects/>
            },
            {
                path: "/interests",
                element: <Interest/>
            },
        ]


    }
], )
function App() {

    return (

            <RouterProvider router={router} />

    )
}

export default App
