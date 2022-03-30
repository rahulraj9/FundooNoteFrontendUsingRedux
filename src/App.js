import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import './App.css';
import Signin from './component/signin/login';
import Registration from './component/signup/registration';
import Dashboard from './component/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Switch>
        <Redirect path ='/' to='/login' exact />
        <Route path='/login' component={Signin} exact />
        <Route path = '/dashboard' component={Dashboard} exact />
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
