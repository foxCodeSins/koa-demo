import React from 'react'
import axios from 'axios'

export default () => {

    axios.get('/v1/test/session').then(res => {
        console.log(res)
    }).catch(error => {
        console.log(error, error.response)
    })

    return (
        <div>user</div>
    )
}