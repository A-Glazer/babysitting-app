export const getBabysitters = (props) => {
    return { type: 'FETCH_BABYSITTERS', payload: props }
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
            dispatch(getBabysitters(babyData))
        } catch (err) {
            alert("Failed to load babysitters")
        }
    }

    // .then(response => response.json())
    // .then(babysitters => dispatch({
    //     type: 'FETCH_BABYSITTERS',
    //     payload: babysitters
    // }))
}



