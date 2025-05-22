import {createBrowserRouter} from 'react-router-dom';
import Form from './Components/Form';
import UserTable from './Components/UserTable';
import SignUpForm from './Components/SignupForm';

const router = createBrowserRouter([
    {
        path:'/',
        element:<UserTable/>
    },
    {
        path:'/form/:index',
        element:<SignUpForm/>
    }
])
export default router;