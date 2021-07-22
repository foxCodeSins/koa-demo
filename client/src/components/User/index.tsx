import React from 'react';
import { Table } from 'antd'

interface User {
    username: string
    password: string
    sex: number
    name: string
    age: number
}

interface UserProps {
    data: User[]
    total: number
    page: number
}

const User:React.FC<UserProps> = (props : UserProps) => {
    return (
        <>
            <Table dataSource={props.data} >
                <Table.Column title="用户名" dataIndex="username" />
                <Table.Column title="密码" dataIndex="password" />
                <Table.Column title="姓名" dataIndex="name" />
                <Table.Column title="性别" dataIndex="sex" />
                <Table.Column title="年龄" dataIndex="age" />
            </Table>
        </>
    )
}

export default User