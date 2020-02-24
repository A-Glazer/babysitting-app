import React from 'react'

const Slots = (props) => {

    function dayToString(day_of_week){
        if (day_of_week === 0){
            return "Sunday"
        }else if (day_of_week === 1){
            return "Monday"
        }else if (day_of_week === 2){
            return "Tuesday"
        }else if (day_of_week === 3){
            return "Wednesday"
        }else if (day_of_week === 4){
            return "Thursday"
        }else if (day_of_week == 5){
            return "Friday"
        }else if (day_of_week === 6){
            return "Saturday"
        }
    }

    function timeToString(time_of_day){
        if (time_of_day === 0){
            return "Morning"
        }else if (time_of_day === 1){
            return "Afternoon"
        }else if (time_of_day === 2){
            return "Evening"
        }

    }

    return (
        <div>
            {props.slots && props.slots.map(slot =>
            <div>
                {dayToString(slot.day_of_week)} - {timeToString(slot.time_of_day)}
            </div>    
            
            )}
        </div>
    )

}

export default Slots