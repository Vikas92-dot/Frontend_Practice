import {createBrowserRouter} from 'react-router-dom';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import VerifyEmail from './Components/User/VerifyEmail';
import Dashboard from './Components/User/Dashboard';
import UserDetails from './Components/User/UserDetails';
import EditUser from './Components/User/EditUser';

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
    },
    {
        path:'/user-details/:id/:token',
        element: <UserDetails/>
    },
    {
        path:'/edit-user/:id/:token',
        element: <EditUser/>
    }
])
export default router;