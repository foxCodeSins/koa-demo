import React from 'react'
import User from '../../components/User/index'
import { useQuery } from 'react-query'
import { listUser } from '@/api/user'

export default () => {

    const { data } = useQuery("user", async () => {
        const { data } = await listUser()
        return data
    })


    return (
        <User data={data} total={10} page={1} />
    )
}
