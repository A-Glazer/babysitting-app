
export default function babysitterReducer(state = { babysitters: [], loading: true }, action) {

    switch (action.type) {
        case 'LOADING_BABYSITTERS':
            return {
                ...state,
                babysitters: [...state.babysitters],
                loading: true
            }

        case 'FETCH_BABYSITTERS':
            // console.log("action.payload", action.payload)
            return { babysitters: action.payload, loading: false }


        case 'ADD_BABYSITTER':
            return {
                ...state,
                babysitters: [...state.babysitters, action.payload],
                loading: false
            }

        // case 'DELETE_BABYSITTER':
        //     const otherBabysitters = state.babysitters.filter(baby => baby !== action.payload)
        //     return {...state, otherBabysitters}


        // case 'ADD_COMMENT':
        //     return {
        //         ...state, babysitters: state.babysitters.map(baby => {
        //             if (baby.id === action.payload.id) {
        //                 return action.payload
        //             } else { return baby }
        //         })
        //     }

        // case 'DELETE_COMMENT':
        //     return {
        //         ...state, babysitters: state.babysitters.map(baby => {
        //             if (baby.id === action.payload.id) {
        //                 return action.payload
        //             } else { return baby }
        //         })
        //     }

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
            //    {id: 51, day_of_week: 0, time_of_day: 0, babysitter_id: 3}
            let otherBabysitters = [...state.babysitters]
            let babysitter = otherBabysitters.filter(babysitter => babysitter.id == action.payload.babysitter_id)
            let slotIndex = babysitter[0].slots.findIndex(slot => slot.day_of_week === action.payload.day_of_week)
            // console.log("babysitter", babysitter)
            // console.log("action.payload.id", action.payload)
            // console.log("babysitter[0].slots", babysitter[0].slots)
            // debugger
            // find day of week and delete slot in day of week
            babysitter[0].slots.splice(slotIndex, 1)
            // console.log("new", babysitter[0].slots)
            // const slots = "test" 
            return {
                ...state,
                babysitter: babysitter
            }


        default:
            return state


    }
}
