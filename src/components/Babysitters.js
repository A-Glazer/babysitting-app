import React from 'react'
import BabysitterShow from './BabysitterShow'

const Babysitters = ({babysitters}) => {

    return (
        <div>
            {babysitters.map(baby => 
                <li key={baby.id}>
                    <BabysitterShow babysitter={baby} />
                </li>

                
                )}
        </div>
    )


}

export default Babysitters