import { Route, Routes } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import UserTable from "./Components/UserTable";

function App(){
  return<>
        <Routes>
          <Route path="/" element={<UserTable/>}/>
          <Route path="/add-user" element={<SignUpForm/>}/>
        </Routes>
  </>
}
export default App;