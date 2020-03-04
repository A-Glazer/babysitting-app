// export const addComment = (comment, babysitter) => {

//     return (dispatch) => {
//         let babysitterId = babysitter.id
//         fetch(`http://localhost:3000/api/v1/babysitters/${babysitterId}/comments`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(comment)
//         })
//             .then(response => response.json())
//             .then(babysitter => dispatch({ type: 'ADD_COMMENT', payload: babysitter }))
//     }

// }