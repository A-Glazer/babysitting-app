
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
        //    let originalUrl = action.payload.url
        //    let middleUrl = originalUrl.slice(0, originalUrl.lastIndexOf("/"))
        //    let lastUrl = middleUrl.slice(0, middleUrl.lastIndexOf("/"))
        //    let babyId = lastUrl.substring(lastUrl.lastIndexOf("/") + 1)
        //    let index =  state.babysitters.findIndex(baby => baby.id == babyId)
          
            debugger
           // const slots = "test" 
            return { ...state }
         
        // const s = "your_string";
        // const withoutLastChunk = s.slice(0, s.lastIndexOf("_"));
        // console.log(withoutLastChunk);

        default:
            return state


    }
}
