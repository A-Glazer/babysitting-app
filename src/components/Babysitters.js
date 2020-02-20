import React from 'react'
import BabysitterShow from './BabysitterShow'

const Babysitters = ({babysitters}) => {

    return (
        <div>
            {babysitters.map(baby => 
                <div key={baby.id}>
                    <BabysitterShow babysitter={baby} />
                </div>

                
                )}
        </div>
    )


}

export default Babysitters