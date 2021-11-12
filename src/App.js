import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Placeorder from './Pages/Placeorder/Placeorder';
import AllProducts from './Pages/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import UpdateOrder from './Pages/Dashboard/UpdateOrder/UpdateOrder';
import UpdateProduct from './Pages/Dashboard/ManageProduct/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/products'>
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path='/placeorder/:id'>
              <Placeorder></Placeorder>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/updateorder/:id'>
              <UpdateOrder></UpdateOrder>
            </PrivateRoute>
            <PrivateRoute path='/updateproduct/:id'>
              <UpdateProduct></UpdateProduct>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
