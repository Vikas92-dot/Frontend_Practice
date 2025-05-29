import {createBrowserRouter} from 'react-router-dom';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import VerifyEmail from './Components/User/VerifyEmail';
import Dashboard from './Components/User/Dashboard';
import UserDetails from './Components/User/UserDetails';
import EditUser from './Components/User/EditUser';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path:"*",
        element: <Login/>
    },
    {
        path:'/',
        element: <Login/>
    },
    {
        path:'/register',
        element: <Register/>
    },
    {
        path:'/email-verification/:email',
        element:<VerifyEmail/>
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>
    },
    {
        path:'/user-details/:id',
        element: <PrivateRoute><UserDetails/></PrivateRoute>
    },
    {
        path:'/edit-user/:id',
        element: <PrivateRoute><EditUser/></PrivateRoute>
    }
])
export default router;