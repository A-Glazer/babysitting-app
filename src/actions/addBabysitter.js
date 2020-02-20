export const addBabysitter = data => {
   
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/babysitters', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }


}