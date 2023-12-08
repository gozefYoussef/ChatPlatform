import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register } from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  return (
    <Router>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route element={<PrivateRoutes/>}>
                    <Route path='/' element={<Dashboard/>}/>
                </Route>
            </Routes>  
    </Router>
    )
}

export default App;