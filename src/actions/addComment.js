export const addComment = data => {
   
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/babysitters', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(comment => dispatch({type: "ADD_COMMENT", payload: comment}) )
    }


}