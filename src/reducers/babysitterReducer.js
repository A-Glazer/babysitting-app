
export default function babysitterReducer(state = {babysitters: []}, action ){

    switch (action.type) {
        case 'FETCH_BABYSITTERS':
            return {babysitters: action.payload}
        
        default:
            return state
            
            
        }
}