import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from 'react'
import Essensanmeldung from './components/Essensanmeldung/Essensanmeldung';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [dates, setDates] = useState([
    {
      day: 'Di',
      date: '2',
      month: 'Okt',
      selection: 'meat',
      extraMeat: 1,
      extraVegi: 1
    },
    {
      day: 'Mi',
      date: '3',
      month: 'Okt',
      selection: 'meat',
      extraMeat: 2,
      extraVegi: 1
    },
    {
      day: 'Do',
      date: '4',
      month: 'Okt',
      selection: 'vegi',
      extraMeat: 5,
      extraVegi: 4
    },
    {
      day: 'Fr',
      date: '5',
      month: 'Okt',
      selection: 'none',
      extraMeat: 0,
      extraVegi: 2
    },
    {
      day: 'Sa',
      date: '6',
      month: 'Okt',
      selection: 'none',
      extraMeat: 0,
      extraVegi: 2
    },
    {
      day: 'So',
      date: '7',
      month: 'Okt',
      selection: 'none',
      extraMeat: 0,
      extraVegi: 2
    }
  ])

  return (
    <> 
      <Header />
      <Essensanmeldung dates={dates} />
      <Footer />
    </>
  );
}

export default App;
