export const deleteSlot = (slot, babysitter) => {

    let timeIds = slot.time_of_day.map(t => t.id)
    return (dispatch) => {
        for (let timeId of timeIds) {
            fetch(`http://localhost:3000/api/v1/babysitters/${babysitter.id}/slots/${timeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(slot)
            })
                .then(response => response.json())
                .then(babysitter => {
                    // debugger
                    console.log("babysitter", babysitter)
                    dispatch({ type: 'DELETE_SLOT', payload: babysitter })

                })

        }
    }

}
