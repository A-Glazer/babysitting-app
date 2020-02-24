export const deleteComment = (commentId, babysitterId) => {

    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/babysitters/${babysitterId}/comments/${commentId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(babysitter => dispatch({type: 'DELETE_COMMENT', payload: babysitter}))
        


    }


}