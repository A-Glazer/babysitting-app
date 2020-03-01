export const getBabysitters = (props) => {
    return { type: 'FETCH_BABYSITTERS', payload: props }
}

export const slotMerge = babyData => {
    const allData = babyData.map(babysitters => babysitters.slots)
    console.log("allData is level 1", allData)
    // const babysitters = allData.map(function(babysitter){
    //     return babysitter
    // })
    // console.log("babysitters level 2", babysitters)
    // const slots = babysitters.map(function(slot){
    //     return slot
    // })
    // console.log("slots level 3", slots)
    const allSlots = [
        {
            day_of_week: 0,
            time_of_day: []
        },
        {
            day_of_week: 1,
            time_of_day: []
        },
        {
            day_of_week: 2,
            time_of_day: []
        },
        {
            day_of_week: 3,
            time_of_day: []
        },
        {
            day_of_week: 4,
            time_of_day: []
        },
        {
            day_of_week: 5,
            time_of_day: []
        },
        {
            day_of_week: 6,
            time_of_day: []
        },
    ]

    for (const elem of allData) {
        for (const slot of elem) {
            console.log("slot in element arr", slot)
            if (allSlots[slot.day_of_week].time_of_day !== slot.time_of_day) {
                allSlots[slot.day_of_week].time_of_day.push(slot.time_of_day)
            }
        }
        console.log("allSlots array", allSlots)
    }
    return allSlots
}

export function fetchBabysitters() {
    return async (dispatch) => {
        dispatch({ type: 'LOADING_BABYSITTERS' })
        try {
            const res = await fetch('http://localhost:3000/api/v1/babysitters')
            if (!res.ok) {
                throw res
            }
            const babyData = await res.json()

            slotMerge(babyData)

            dispatch(getBabysitters(babyData))
        } catch (err) {
            alert("Failed to load babysitters")
        }
    }

}


// slot of element: {id: 14, day_of_week: 6, time_of_day: 2, babysitter_id: 3}



// for (let slot of slots) {
//     console.log("slot is", slot[0])
//     const index = allSlots.findIndex(el => el.day_of_week === slot.day_of_week)
//     if (index !== -1) {
//         allSlots[index].time_of_day.push(slot.time_of_day)
//     } else {
//         allSlots.push({ ...slot, time_of_day: [slot.time_of_day] })
//     }
// }


{ /*
    const slots = data.slots
    const consolidatedSlots = []
    for(slot of slots){
        const index = consolidatedSlots.findIndex(s => s.day === slot.day)
        if(index !== -1){ // if the index is not -1 it means it exists
            
            // add the new timeslot to the slot for the day that already is in your consolidatedSlots
            consolidatedSlots[index].times.push(slot.time)
        }else{ // if index IS -1, you couldnt find a slot with this day
            
            // turn time into times and make it an array of the time option
            consolidatedSlots.push({...slot, times: [slot.time]}) 
        }
    }
    ​
    // now your action.payload (or whatever key you are using) is going to be consolidatedSlots
    */}




