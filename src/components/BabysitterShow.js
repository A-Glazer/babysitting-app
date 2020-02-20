import React from 'react'

const BabysitterShow = (props) => {

    console.log(props)
    return (
        <div>
            <b>{props.babysitter.last_name}</b>, {props.babysitter.first_name}
            <br/> 
            {props.babysitter.phone_number}
            <br/>
        </div>
    )
}

export default BabysitterShow