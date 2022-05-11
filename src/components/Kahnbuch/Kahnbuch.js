import { useState } from 'react';
import Header from "./Header"
import SeparatorSVG from "../SVGs/SeparatorSVG"
import KahnCalendar from './KahnCalendar';

const Kahnbuch = () => {
  const [date, setDate] = useState(new Date());
  const [reserved, setReserved] = useState([
    "Jonas Dransfeld",
    new Date("May 21, 2022 03:24:00"),
    "Janis Göttert",
    new Date("May 25, 2022 03:24:00"),
    "Janis Göttert",
    new Date("May 1, 2022 03:24:00"),
    "Janis Göttert",
    new Date("April 1, 2022 03:24:00")
  ]);
  
  return (
    <>
    <Header heading='Kahnbuch' />
    <SeparatorSVG />
    <KahnCalendar date={date} setDate={setDate} reserved={reserved}/>
    </> 
  )
}

export default Kahnbuch