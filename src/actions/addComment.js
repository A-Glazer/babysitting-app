export const addComment = (comment, babysitterId) => {

    return (dispatch) => {
        fetch(`http://localhost3000/api/v1/babysitters/${babysitterId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(babysitter => dispatch({type: 'ADD_COMMENT', payload: babysitter}))
    }
    
    }