import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import DaySelector from './DaySelector'

const DateSlider = ({ dates }) => {
  return (
    <ListGroup horizontal='sm'>
        {dates.map((date) => (
          <ListGroup.Item>
             <DaySelector date={date}/>
          </ListGroup.Item>))}
      </ListGroup>
  )
}

export default DateSlider
