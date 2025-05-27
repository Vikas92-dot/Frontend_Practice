import {createBrowserRouter} from 'react-router-dom';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import VerifyEmail from './Components/User/VerifyEmail';
import Dashboard from './Components/User/Dashboard';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Login/>
    },
    {
        path:'/register',
        element: <Register/>
    },
    {
        path:'/email-verification/:email/:token/:id',
        element:<VerifyEmail/>
    },
    {
        path:'/dashboard/:token',
        element: <Dashboard/>
    }
])
export default router;