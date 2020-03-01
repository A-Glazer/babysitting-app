export const addSlot = (slot, babysitterId) => {

    return (dispatch) => {
        console.log("addSlot", slot)
        fetch(`http://localhost:3000/api/v1/babysitters/${babysitterId}/slots`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(slot)
        })
            .then(response => response.json())
            .then(babysitter => dispatch({ type: 'ADD_SLOT', payload: babysitter }))
    }

}