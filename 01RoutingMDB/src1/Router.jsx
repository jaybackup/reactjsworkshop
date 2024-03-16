import { createBrowserRouter } from 'react-router-dom';
import HomePageData from './CustomHomePage';
import HeaderComponent from './Components/Header';
const router = createBrowserRouter([
    {
        path: "/",
        // element: <div>Hello world!</div>,
        element: <HomePageData/>,
    }, {
        path: "/about",
        element: <div><HeaderComponent/>about us page data</div>,
    },

])
export default router;