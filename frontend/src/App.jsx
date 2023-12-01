import { useState } from 'react';
import {Login,Dashboard,Register} from './pages';
import Navigation from './components/navigation';

const initialState = {
  route: 'login',
  isSignedIn: false,
  user:{
    id: '',
    name: '',
    email: '',
    password: '',
  }
}

function App() {
  const [state,setState] = useState(initialState);

  const onRouteChange = (route) => {
    if(route === 'logout'){
      setState(initialState);
    } else if (route === 'dashboard'){
      setState(prev => ({...prev, isSignedIn: true}))
    }
    setState(prev => ({...prev, route}));
  }

  const {isSignedIn,route} = state;

  return (
    <div>
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
      {route === 'dashboard' ? <Dashboard/> : route === 'login' ? <Login/> : <Register/>}
    </div>
  )
}

export default App
