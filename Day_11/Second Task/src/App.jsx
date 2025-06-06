import { Route, RouterProvider, Routes } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import UserTable from "./Components/UserTable";
import router from "./routeConfig";

function App(){
  return<>
        {/* <Routes>
          <Route path="/" element={<UserTable/>}/>
          <Route path="/add-user" element={<SignUpForm/>}/>
        </Routes> */}
        <RouterProvider router={router}/>
  </> 
}
export default App;