import { createBrowserRouter } from 'react-router-dom';
import HomePageData from './CustomHomePage';
import HeaderComponent from './Components/Header';
import StateExample from './Components/StateExample.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        // element: <div>Hello world!</div>,
        element: <HomePageData />,
    }, {
        path: "/about",
        element: <div><HeaderComponent />about us page data</div>,
    }, {
        path: "/state",
        element: <>
            <HeaderComponent />
            <StateExample />
        </>,
        // element: <StateExample/>,
    },

])
export default router;