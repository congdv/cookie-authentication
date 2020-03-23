import React, {useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { PublicRouter } from './router/PublicRouter';
import { PrivateRouter } from './router/PrivateRouter';

const Login = () => {
  const dispatch = useDispatch();
  const login = async() => {
    try {
      dispatch({type:'LOGIN'})
      const {data} = await axios.get('http://localhost:3000/api/auth?code=congdv');
      console.log(data);

      dispatch({type: 'LOGIN_SUCCESS', message: data.message});
    } catch(error) {
      console.log(error);
      dispatch({type: 'LOGIN_FAILURE', error: error});
    }

    
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Authorization</button>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

const Dashboard = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const getDashboard = () => {
    try {
      const data  = axios.get('http://localhost:3000/api/dashboard');
      dispatch({type: 'LOGIN_SUCCESS', message: data.message});
    } catch(error) {
      console.log("eeeeeeeeeeeeeeeeee");
      dispatch({type: 'LOGIN_FAILURE', error: error});
    }
  }

  useEffect(() => {
    // getDashboard();
  },[])
  if(state.loading) {
    return <div>Loading...</div>
  }
  return (
    
    <div>
      {state.message}
      <p>This is dashboard</p>
      <Link to="/logout">Logout</Link>
      <Link to="/">Home</Link>
    </div>
  )
}

const Logout = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const logout = async() => {
    try {
      dispatch({type: 'LOGOUT'});
      await axios.get('http://localhost:3000/api/unauth');

      dispatch({type: 'LOGOUT_SUCCESS'});
    } catch(error) {
      console.log(error);
      dispatch({type: 'LOGIN_FAILURE', error: error});
    }

    
  };
  return (
    <div>
      <h2>Logout</h2>
      <button onClick={logout}>Logout</button>
      <Link to="/">Home</Link>
    </div>
  )
}

const Home = () => {
  return (
  <div>Hello world
    <Link to="/login">login</Link>
    <Link to="/dashboard">Dashboard</Link>
  </div>
  )
}

const App = () => {
 
  return (
    <Router>
      <Switch>
        <PublicRouter exact path="/" component={Home}/>
        <PublicRouter exact path="/login" component={Login}/>
        <Route exact path="/logout" component={Logout} />
        <PrivateRouter exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  )
};

export default App;