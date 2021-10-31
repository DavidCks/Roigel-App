import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import DaySelector from './DaySelector'
import ExtrasSelector from './ExtrasSelector'

const DateSlider = ({ dates }) => {
  return (
    <ListGroup horizontal='sm'>
        {dates.map((date, index) => (
          <ListGroup.Item style={{zIndex: index * -1 + 99999999}}>
             <DaySelector date={date}/>
             {date.selection != 'none' && 
              <ExtrasSelector date={date} />}
          </ListGroup.Item>))}
      </ListGroup>
  )
}

export default DateSlider
