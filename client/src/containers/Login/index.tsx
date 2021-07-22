import React, { useState, useCallback } from 'react'
import Login from '../../components/Login'
import * as loginApi from '../../api/login'
import { useHistory } from 'react-router';

export default () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const routerHistory = useHistory()

    const handleLogin = useCallback(async () => {
        try {
            const res: any = await loginApi.login(username, password)
            console.log('res =============>', res)
            if(res.code === 'C200') {
                routerHistory.push('/user')
            }
        } catch (error) {
            console.log(error)
        }
    }, [username, password, routerHistory])

    const handleReigster = useCallback(async () => {
        routerHistory.push('/register')
    }, [routerHistory])

    const handleInputUsername: any = (val: any) => { setusername(val.target.value) }
    const handleInputPassword: any = (val: any) => { setpassword(val.target.value) }


    const loginProps = {
        username,
        password,
        handleLogin,
        handleInputUsername,
        handleInputPassword,
        handleReigster,
    } 

    return (
        <Login {...loginProps} />
    )
}

