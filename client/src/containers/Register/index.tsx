import React,{ useCallback, useState} from 'react'
import RegisterCom from '../../components/Register'


export default () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleRegister = useCallback(async (values: any) => {
        console.log('register', values)
        setUsername(values.username)
        setPassword(values.password)
    }, [])

    return (
        <RegisterCom 
            username={username}
            password={password}
            handleRegister={handleRegister}
        />
    )
}