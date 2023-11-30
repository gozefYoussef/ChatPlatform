import {Login,Dashboard,Register} from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <div className=''>
          <Routes>
            <Route path="/login" Component={Login}/>
            <Route path="/register" Component={Register}/>
            <Route path="/dashboard" Component={Dashboard}/>
            <Route path="/" exact Component={Login}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
