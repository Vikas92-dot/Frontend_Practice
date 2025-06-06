import {createBrowserRouter} from 'react-router-dom';
import UserTable from './Components/UserTable';
import SignUpForm from './Components/SignupForm';
import Form from './Form';

const router = createBrowserRouter([
    {
        path:'/',
        element:<UserTable/>
    },
    {
        path:'/form/:index',
        element:<Form/>
    },
    {
        path:'/form',
        element:<Form/>
    }
]);
export default router;