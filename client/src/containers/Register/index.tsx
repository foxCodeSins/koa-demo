import React,{ useCallback, useState} from 'react'
import RegisterCom from '../../components/Register'
import { useMutation, useQuery } from 'react-query'
import { register } from '@/api/login'

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
            console.log(err.message, vars, ctx)
            alert(err.message)
        },
        onSuccess(data, vars, ctx) {
            console.log(data, vars, ctx)
        }
    })
    
    const handleRegister = useCallback(async (values: any) => {
        console.log('register', values)
        setUsername(values.username)
        setPassword(values.password)
        setRePassword(values.rePassword)
        setName(values.name)
        setSex(values.sex)
        setAge(values.age)

        // const { data } = mutate({ username, password, name, sex, age })
        mutation.mutate({ username, password, name, sex, age })
    }, [])

    // const res = useQuery("register", async () => {
    //     return  await register()
    // })

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