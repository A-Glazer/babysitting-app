import React from 'react'

const Slots = (props) => {

    return (
        <div>
            {props.slots && props.slots.map(slot =>
            // console.log(slot),
            <div>
                {slot.day_of_week}-{slot.time_of_day}
            </div>    
            // <li key={slot.id}>{slot} </li>
                
            )}
        </div>
    )

}

export default Slots