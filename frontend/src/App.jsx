import {Auth,Dashboard} from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className=''>
          <Routes>
            <Route path="/auth" Component={Auth}/>
            <Route path="/dashboard" Component={Dashboard}/>
            <Route path="/" exact Component={Auth}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
