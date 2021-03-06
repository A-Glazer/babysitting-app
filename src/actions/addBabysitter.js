export const addBabysitter = data => {

    return (dispatch) => {
        dispatch({ type: 'LOADING_BABYSITTERS' })
        fetch('http://localhost:3000/api/v1/babysitters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(babysitter => dispatch({
                type: "ADD_BABYSITTER",
                payload: babysitter
            }))
    }


}