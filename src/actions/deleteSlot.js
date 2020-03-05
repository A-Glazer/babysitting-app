export const deleteSlot = (slot, babysitter) => {
    debugger
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/babysitters/${babysitter.id}/slots/`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(test => console.log("test", test))
            .then(babysitter => dispatch({ type: 'DELETE_SLOT', payload: babysitter }))



    }


}