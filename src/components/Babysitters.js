import React from 'react'
import {Route, Link} from 'react-router-dom'
import BabysitterShow from './BabysitterShow'

const Babysitters = ({babysitters}) => {

    return (
        <div>
            {babysitters.map(baby => 
                <li key={baby.id}>
                    <Link to={`/babysitters/${baby.id}`}>{baby.last_name}, {baby.first_name}</Link>
                    
                </li>

                
                )}
        </div>
    )


}

export default Babysitters