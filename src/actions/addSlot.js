export const addSlot = (slot, babysitterId) => {

return (dispatch) => {
    fetch(`http://localhost3000/api/v1/babysitters/${babysitterId}/slots`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(slot)
    })
    .then(response => response.json())
    .then(slot => dispatch({type: 'ADD_SLOT', payload: slot}))
}

}