import uuid from 'uuid'

export const getBabysitters = (props) => {
    return { type: 'FETCH_BABYSITTERS', payload: props }
}

export const slotMerge = babyData => {
    return babyData.map(babysitter => {
        const allSlots = [
            {
                id: 0,
                day_of_week: 0,
                time_of_day: []
            },
            {
                id: 1,
                day_of_week: 1,
                time_of_day: []
            },
            {
                id: 2,
                day_of_week: 2,
                time_of_day: []
            },
            {
                id: 3,
                day_of_week: 3,
                time_of_day: []
            },
            {
                id: 4,
                day_of_week: 4,
                time_of_day: []
            },
            {
                id: 5,
                day_of_week: 5,
                time_of_day: []
            },
            {
                id: 6,
                day_of_week: 6,
                time_of_day: []
            },
        ]
        for (const slot of babysitter.slots) {
            if (allSlots[slot.day_of_week] && allSlots[slot.day_of_week].time_of_day !== slot.time_of_day) {
                allSlots[slot.day_of_week].time_of_day.push({time: slot.time_of_day, id: slot.id})
            }
        }
        return { ...babysitter, slots: allSlots }
    })
}

export function fetchBabysitters() {
    return async (dispatch) => {
        dispatch({ type: 'LOADING_BABYSITTERS' })
        try {
            const res = await fetch('http://localhost:3000/api/v1/babysitters')
            // console.log("res 1", res)
            if (!res.ok) {
                throw console.log(res)
            }
            const babyData = await res.json()

            const slotArr = slotMerge(babyData)
            // console.log("This is slotArr", slotArr)

            let response = getBabysitters(slotArr)
            // console.log("response 3", response)
            dispatch(response)
        } catch (err) {
            console.log(err)
            alert("Failed to load babysitters")
        }
    }

}


