import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutAs from './pages/aboutUs/AboutUs';
import OurServices from './pages/ourService/OurService';
import Partner from './pages/partner/Partner';
import Transportation from './pages/transportation/Transportation';
import Contact from './pages/contact/Contact';
import Transport from './pages/transport/Transport';
import Registration from './pages/registration/Registration';
import Documets from './pages/documets/Documets';
import Loading from './pages/loading/Loading';
import Review from './pages/review/Review';
import Articles from './pages/articles/Articles';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
       <Switch>
          <Route path="/articles">
              <Articles/>
          </Route>
          <Route path="/review">
              <Review/>
          </Route>
          <Route path="/loading">
              <Loading/>
          </Route>
          <Route path="/documents">
              <Documets/>
          </Route>
          <Route path="/registration">
              <Registration/>
          </Route>
          <Route path="/transport">
              <Transport/>
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
          <Route path="/transportation">
              <Transportation/>
          </Route>
          <Route path="/partner">
              <Partner/>
          </Route>
          <Route path="/service">
              <OurServices/>
          </Route>
         <Route path="/about">
              <AboutAs/>
          </Route>
          <Route path="/">
              <Main/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
