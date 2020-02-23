import React from 'react'
import {Redirect} from 'react-router-dom'

const BabysitterShow = (props) => {
    let babysitter = props.babysitters[props.match.params.id -1]

    console.log(props)
    // function babysitterExist(){
    //     if (babysitter)
    // }


    return (
        <div>
        <h2>{babysitter ? babysitter.last_name : null}
            , {babysitter ? babysitter.first_name : null}
            <br/> 
        </h2>
        <p>
            {babysitter ? babysitter.phone_number : null}
            <br/>
            
        </p>
        </div>
    )
}

export default BabysitterShow