import './App.css';
import React from "react";
import Data from './data/MovieData2.json'



import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Booking } from "./pages/Booking";
import { Coming } from "./pages/Coming";
import { Login } from './pages/Loging';


export default function App() {
  

  // const AddMovieData = () => {

  // }
  return (
    <>
      <div className='main'>


        <nav>
          <div className='logo'>
            <b>MOVIE<span>leap</span></b>
            <p>ENTERTAIMENT</p>

          </div>

          <ul>
            <li>
              <Link to="/home">Нүүр</Link>
            </li>
            <li>
              <Link to="/about">Тун удахгүй</Link>
            </li>
            <li>
              <Link to="/booking">Захиалга</Link>
            </li>
            <li>
              <Link to="/coming">Холбоо барих</Link>
            </li>
            <li>
              <Link to="/login">Нэвтрэх</Link>
            </li>
          </ul>
          <div>
            <input type="searchbox" placeholder='Search...'></input>
          </div>
        </nav>
        <div className='video-main'>

        </div>
        <Routes>
          <Route path="/Booking" element={<Booking data={Data} />} />
          <Route path="/Home" element={<Home data={Data} />} />

          <Route path="/About" element={<About />} />
          <Route path="/Coming" element={<Coming />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

        


      </div>
    </>
  );
}