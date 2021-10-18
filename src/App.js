import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import SingleServices from './pages/SingleServices/SingleServices';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
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
          <Route path="/service/:id">
            <SingleServices></SingleServices>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
