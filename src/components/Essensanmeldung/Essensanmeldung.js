import Header from "./Header"
import DateSlider from "./DateSlider"
import SeparatorSVG from "../SVGs/SeparatorSVG"

const Essensanmeldung = ({ dates }) => {
  return (
    <>
      <Header heading='Essensanmeldung'/>
      <SeparatorSVG />
      <DateSlider dates={dates} />
    </>
  )
}

export default Essensanmeldung
