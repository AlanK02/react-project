import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Speciality from './components/Speciality';
import Popular from './components/Popular';
import Review from './components/Review';
import Order from './components/Order';
import Footer from './components/Footer';

function Main(){
    return(<div>
    <Header/>
    <Home />
    <Speciality/>
    <Popular/>
    <Review/>
    <Order name="IITU"/>
    <Footer/>
    </div> 
  );

}
export default Main;