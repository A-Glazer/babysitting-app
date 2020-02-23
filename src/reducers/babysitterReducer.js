
export default function babysitterReducer(state = {babysitters: []}, action ){
    
    switch (action.type) {
        case 'FETCH_BABYSITTERS':
            return {babysitters: action.payload}
        
        case 'ADD_BABYSITTER':
            return {...state, 
                babysitters: [...state.babysitters, action.payload]
            }
        
        case 'ADD_COMMENT':
            return {...state, babysitters: state.babysitters.map(baby => {
                if (baby.id === action.payload.id){
                    return action.payload
                }else{
                    return baby                
                }

            }
                )}

        case 'ADD_SLOT':
            return {...state, babysitters: state.babysitters.map(baby => {
                if (baby.id === action.payload.id){
                    return action.payload
                }else{
                    return baby                
                }

            }
                )}

        default:
            return state
            
            
        }
}