import { slotMerge } from './fetchBabysitters'

export const addSlot = (slot, babysitter) => {

    return (dispatch) => {
        let babysitterId = babysitter.id
        // console.log("addSlot", slot)
        fetch(`http://localhost:3000/api/v1/babysitters/${babysitterId}/slots`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(slot)
        })
            .then(response => response.json())
            .then(babysitter => {

                const newBabysitter = slotMerge([babysitter])[0]
                dispatch({ type: 'ADD_SLOT', payload: newBabysitter })
            })
    }


}