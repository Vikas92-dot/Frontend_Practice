import { RouterProvider } from "react-router-dom";
import router from "./Router/routeConfig";


function App(){
  return<>
      <RouterProvider router={router}/>
  </>
}
export default App;