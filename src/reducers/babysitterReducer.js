
export default function babysitterReducer(state = { babysitters: [], loading: false }, action) {

    switch (action.type) {
        case 'LOADING_BABYSITTERS':
            return {
                ...state,
                babysitters: [...state.babysitters],
                loading: true
            }

        case 'FETCH_BABYSITTERS':
            console.log("action.payload", action.payload)
            return { babysitters: action.payload, loading: false }


        case 'ADD_BABYSITTER':
            return {
                ...state,
                babysitters: [...state.babysitters, action.payload],
                loading: false
            }

        case 'ADD_COMMENT':
            return {
                ...state, babysitters: state.babysitters.map(baby => {
                    if (baby.id === action.payload.id) {
                        return action.payload
                    } else { return baby }
                })
            }

        case 'DELETE_COMMENT':
            return {
                ...state, babysitters: state.babysitters.map(baby => {
                    if (baby.id === action.payload.id) {
                        return action.payload
                    } else { return baby }
                })
            }

        case 'ADD_SLOT': 
        let sitter = state.babysitters.filter(baby => baby.id === action.payload.id)
            console.log("sitter", sitter[0])
            return { ...state, babysitters: sitter[0] }



        default:
            return state


    }
}