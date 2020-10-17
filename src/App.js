import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from "./Navbar";
import QRcode from './QRcode';
import Barcode from './Barcode';
import Pdf from './pdf';
import pdfn from './pdfn';
import Forensic from './components/Forensic';
import brcoden from './brcoden';


const App=() =>{
  return(
  <>
  <Navbar />
  <Switch >
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/login" component={Login} />
    <Route  exact path="/admin" component={Admin} />
    <Route  exact path="/logout" component={Logout} />
    <Route  exact path="/qrcode" component={QRcode} />
    <Route  exact path="/barcode" component={Barcode} />
    <Route  exact path="/pdf" component={Pdf} />
    <Route  exact path="/pdfn" component={pdfn} />
    <Route  exact path="/forensic" component={Forensic} />
    <Route  exact path="/brcoden" component={brcoden} />

    <Redirect to="/" />
</Switch>
<Footer />
</>
  );
};

export default App;
