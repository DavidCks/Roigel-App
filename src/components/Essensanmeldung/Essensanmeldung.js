import Header from "./Header"
import DateSlider from "./DateSlider"
import SeparatorSVG from "../SVGs/SeparatorSVG"
import FullDayDisplay from "./FullDayDisplay"

const Essensanmeldung = ({ dates }) => {
  return (
    <>
      <Header heading='Essensanmeldung'/>
      <SeparatorSVG />
      <DateSlider dates={dates} />
      <FullDayDisplay dates={dates}/>
    </>
  )
}

export default Essensanmeldung
