export const deleteBabysitter = (babysitterId) => {

    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/babysitters/${babysitterId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(babysitter => dispatch({ type: 'DELETE_BABYSITTER', payload: babysitter.id }))



    }


}