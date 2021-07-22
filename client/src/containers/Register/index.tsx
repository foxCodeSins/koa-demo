import React,{ useCallback, useState} from 'react'
import RegisterCom from '../../components/Register'
import { useMutation } from 'react-query'
import { register } from '@/api/login'
import { message } from 'antd'

export default () => {
    const [username, setUsername] = useState("w1");
    const [password, setPassword] = useState("123");
    const [rePassword, setRePassword] = useState("123");
    const [name, setName] = useState("w1");
    const [sex, setSex] = useState(0);
    const [age, setAge] = useState(12);

    const submit = ({ username, password, name, sex, age }: any) => {
        return register(username, password, name, sex, age)
    }

    const mutation = useMutation(submit, {
        onError(err: Error, vars, ctx) {
            alert(err.message)
        },
        onSuccess(data: any, vars, ctx) {
            if(data.code === "C200") {
                message.success(data.message)
            } else {
                message.error(data.message)
            }
        }
    })
    
    const handleRegister = useCallback(async (values: any) => {
        setUsername(values.username)
        setPassword(values.password)
        setRePassword(values.rePassword)
        setName(values.name)
        setSex(values.sex)
        setAge(values.age)

        mutation.mutate({ username, password, name, sex, age })
    }, [])


    return (
        <RegisterCom 
            username={username}
            password={password}
            rePassword={rePassword}
            name={name}
            sex={sex}
            age={age}
            isLoading={mutation.isLoading}
            handleRegister={handleRegister}
        />
    )
}