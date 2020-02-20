import React from 'react'

const Babysitters = ({babysitters}) => {

    return (
        <div>
            {babysitters.map(baby => 
                <ul>
                    <li key={baby.id}>
                        <b>{baby.last_name}, {baby.first_name} </b>
                        <br/>
                        {baby.phone_number}
                    </li>

                </ul>
                )}
        </div>
    )


}

export default Babysitters