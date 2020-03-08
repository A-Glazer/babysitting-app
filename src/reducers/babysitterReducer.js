
export default function babysitterReducer(state = { babysitters: [], loading: true }, action) {

    switch (action.type) {
        case 'LOADING_BABYSITTERS':
            return {
                ...state,
                babysitters: [...state.babysitters],
                loading: true
            }

        case 'FETCH_BABYSITTERS':
            return { babysitters: action.payload, loading: false }


        case 'ADD_BABYSITTER':
            return {
                ...state,
                babysitters: [...state.babysitters, action.payload],
                loading: false
            }

        case 'ADD_SLOT':
            let updatedBabysitters = [...state.babysitters]
            let newSitter = updatedBabysitters.find(baby => baby.id === action.payload.id)
            let index = updatedBabysitters.findIndex(baby => (baby === newSitter))
            updatedBabysitters[index] = (action.payload)
            return {
                ...state,
                babysitters: updatedBabysitters,
                loading: false
            }

        case "DELETE_SLOT":
            let otherBabysitters = [...state.babysitters]
            let babysitter = otherBabysitters.filter(babysitter => babysitter.id == action.payload.babysitter_id)
            
            if (babysitter[0]){
                babysitter[0].slots[action.payload.day_of_week].time_of_day = []
            }
            
           
            let final = [...otherBabysitters.filter(babysitter => babysitter.id !== action.payload.babysitter_id),
                ...babysitter]
            return {
                ...state,
                babysitters: final
            }


        default:
            return state


    }
}
