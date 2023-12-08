import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register } from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";

const App = () => {
  return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route element={<PrivateRoutes/>}>
                    <Route path='/' element={<Dashboard/>}/>
                </Route>
            </Routes>  
        </AuthProvider>
    </Router>
    )
}

export default App;