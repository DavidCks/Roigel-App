import Header from "./Header"
import DateSlider from "./DateSlider"
import SeparatorSVG from "../SVGs/SeparatorSVG"
import FullDayDisplay from "./FullDayDisplay"
import DualCard from "../Global/DualCard"
import MeatSVG from "../SVGs/MeatSVG"
import VegiSVG from "../SVGs/VegiSVG"
import dateCalc from "../functions/dateCalc"

const Essensanmeldung = ({ dates }) => {

  const calcDualCardData = () => {
    // array: [[0] = 'Day, Date'
    //         [1] = {Ammount Meat}
    //         [2] = {Ammount Vegi}
    //        ]

    let arr = [
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
      ['', 0, 0],
    ]

    dates.forEach(datesPerUser => {
      datesPerUser.forEach((date, i) => {
        if(i !== 0) {
          //define the day
          arr[i-1][0] = dateCalc(date.day, date.date, date.month, date.year)

          //sum up the values for each day
          if(date.selection !== 'none'){
            arr[i-1][1] += date.extraMeat
            arr[i-1][2] += date.extraVegi

            date.selection === 'meat' && arr[i-1][1]++
            date.selection === 'vegi' && arr[i-1][2]++
          }
        }
      })
    });

    return arr
  }

  //data needs to be populated in full in order for the site to work properly

  return (
    <>
      <Header heading='Essensanmeldung'/>
      <SeparatorSVG />
      <DateSlider dates={dates} />
      <FullDayDisplay dates={dates}/>
      {calcDualCardData().map((dataByDay, i) =>
        <DualCard key={i} titleText={dataByDay[0]}
                  Icon1={MeatSVG} h1='Fleisch' t1={dataByDay[1]}
                  Icon2={VegiSVG} h2='Vegi'    t2={dataByDay[2]} />
      )}
    </>
  )
}

export default Essensanmeldung
