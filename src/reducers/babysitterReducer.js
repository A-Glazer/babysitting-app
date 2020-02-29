
export default function babysitterReducer(state = {babysitters: [], loading: false}, action ){
    
    switch (action.type) {
        case 'LOADING_BABYSITTERS':
            return {...state, 
                babysitters: [...state.babysitters],
                loading: true
            }
        
        case 'FETCH_BABYSITTERS':
            return {babysitters: action.payload, loading: false}
            
        
        case 'ADD_BABYSITTER':
            return {...state, 
                babysitters: [...state.babysitters, action.payload],
                loading: false
            }
        
        case 'ADD_COMMENT':
            return {...state, babysitters: state.babysitters.map(baby => {
                if (baby.id === action.payload.id){
                    return action.payload
                }else{return baby}
            })}

        case 'DELETE_COMMENT':
            return {...state, babysitters: state.babysitters.map(baby => {
                if (baby.id === action.payload.id){
                    return action.payload
                }else{return baby}
            })}

        case 'ADD_SLOT':
            let babysitters = state.babysitters.map(baby => {
                if (baby.id === action.payload.id) {
                    return action.payload
                }else{
                    return baby
                }
            })
            return {...state, babysitters: babysitters}
            
            

        default:
            return state
            
            
        }
}