export const deleteSlot = (slot, babysitter) => {
    let timeId = slot.time_of_day.map(t => t.id)[0]
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/babysitters/${babysitter.id}/slots/${timeId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(slot)
        })
            // .then(response => response.json())
            .then(babysitter => {
                // debugger
                dispatch({ type: 'DELETE_SLOT', babysitter })
                
            })
        // }
    }

}
