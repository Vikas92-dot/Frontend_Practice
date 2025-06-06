import { createBrowserRouter,RouterProvider } from "react-router-dom";
import UserTable from "./Components/UserTable";
import SignUpForm from "./Components/SignUpForm";

const router = createBrowserRouter([
    {
        path:"/",
        element: <UserTable/>
    },
    {
        path:"/form",
        element: <SignUpForm/>
    }
])
export default router;