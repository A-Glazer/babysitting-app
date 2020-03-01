export function fetchBabysitters() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_BABYSITTERS' })
        fetch('http://localhost:3000/api/v1/babysitters')
            .then(response => response.json())
            .then(babysitters => dispatch({
                type: 'FETCH_BABYSITTERS',
                payload: babysitters
            }))
    }

}

