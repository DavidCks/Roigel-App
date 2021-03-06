import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from 'react'
import Essensanmeldung from './components/Essensanmeldung/Essensanmeldung';
import Kahnbuch from './components/Kahnbuch/Kahnbuch';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import Err404 from './components/Err404/Err404';
import Authenticate from './components/Auth/Authenticate';

function App() {
  //structure: array of array of dates
  /*  all entries > per user (where the [0]th object is user specifics)
      per user > all date specifics for that user (starting at the [1]st object)   
      [1]st element should always be todays date
  */
  const [dates, setDates] = useState([
    [
      {
        user: 'Jonas Dransfeld'
      },
      {
        day: 'Di',
        date: '2',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 3,
        extraVegi: 1
      },
      {
        day: 'Mi',
        date: '3',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 1,
        extraVegi: 1
      },
      {
        day: 'Do',
        date: '4',
        month: 'Okt',
        year: '2021',
        selection: 'vegi',
        extraMeat: 5,
        extraVegi: 4
      },
      {
        day: 'Fr',
        date: '5',
        month: 'Okt',
        year: '2021',
        selection: 'none',
        extraMeat: 0,
        extraVegi: 2
      },
      {
        day: 'Sa',
        date: '6',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 0,
        extraVegi: 3
      },
      {
        day: 'So',
        date: '7',
        month: 'Okt',
        year: '2021',
        selection: 'none',
        extraMeat: 0,
        extraVegi: 1
      }
    ],
    [
      {
        user: 'Marvin'
      },
      {
        day: 'Di',
        date: '2',
        month: 'Okt',
        year: '2021',
        selection: 'none',
        extraMeat: 2,
        extraVegi: 1
      },
      {
        day: 'Mi',
        date: '3',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 0,
        extraVegi: 1
      }
    ],
    [
      {
        user: 'Christ'
      },
      {
        day: 'Di',
        date: '2',
        month: 'Okt',
        year: '2021',
        selection: 'vegi',
        extraMeat: 3,
        extraVegi: 3
      }
    ],
    [
      {
        user: 'G??ttert'
      },
      {
        day: 'Di',
        date: '2',
        month: 'Okt',
        year: '2021',
        selection: 'meat',
        extraMeat: 5,
        extraVegi: 1
      }
    ],
  ])

  return (
    <> 
      <BrowserRouter>
        <Header Link={Link}/>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/essen" element={<Essensanmeldung dates={dates} />}/>
          <Route path="/kahn" element={<Kahnbuch />} /> 
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<Err404 Link={Link}/>}/>
          <Route path="/authenticate" element={<Authenticate/>}/>
        </Routes>
        <Footer Link={Link} />
      </BrowserRouter>
    </>
  );
}

export default App;
