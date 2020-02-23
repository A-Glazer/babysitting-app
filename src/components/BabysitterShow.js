import React from 'react'

const BabysitterShow = (props) => {
    let babysitter = props.babysitters[props.match.params.id -1]

    console.log(props)
    // function babysitterExist(){
    //     if (babysitter)
    // }


    return (
        <div>  
        <b>{babysitter ? babysitter.last_name : null}</b>
            , {babysitter ? babysitter.first_name : null}
            <br/> 
            {babysitter ? babysitter.phone_number : null}
            <br/>
            
        </div>
    )
}

export default BabysitterShow