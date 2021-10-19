import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Details from './Pages/Home/Details/Details';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import About from './Pages/About/About';
import Vats from './Pages/Home/Vats/Vats';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/vats">
              <Vats></Vats>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/details/:service">
              <Details></Details>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
