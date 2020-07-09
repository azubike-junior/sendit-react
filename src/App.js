import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import About from './pages/AboutPage.jsx';
import Dashboard from './pages/Dashboad.jsx';
import Signin from './pages/SignInPage';
import Signup from './pages/SignUpPage';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import Footer from './components/Footer'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {ProtectedRoute} from './helpers/authentication'
import NotFound from './pages/NotFound.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ConfirmPage from './pages/ConfirmPage.jsx';

toast.configure({
  autoclose: 8000,
  draggable: false
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ToastContainer />
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/user/verify/:token" component={ConfirmPage} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <Route component={NotFound} />
              <Footer/>
            </Switch>

          </React.Fragment>
        </Router>
        </Provider>
    );
  }
}
