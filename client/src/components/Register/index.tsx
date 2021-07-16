import { Form, Input, Button, Select } from 'antd'
import React from 'react'

interface RegisterProps {
    username: string,
    password: string,
    rePassword: string,
    name: string,
    sex: number,
    age: number | null,
    isLoading: boolean,
    handleRegister?(values: any): void
}

const Register:React.FC<RegisterProps> = (props: RegisterProps) => {
    return (
        <Form 
            className="w-1/2 p-5 border border-gray-300 rounded-lg "
            onFinish={props.handleRegister}
            initialValues={{...props}}
        >
            <Form.Item name="username" rules={[{ required: true, message: "请输入账户"}]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入密码"}]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="rePassword" rules={[{required: true, message: "请输入密码"}, (({ getFieldValue }) => ({
                validator(_, value) {
                    if(!value || value === getFieldValue('password')) {
                        return Promise.resolve()
                    } else {
                        return Promise.reject(new Error('密码不一致'))
                    }
                }
            }))]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="name" rules={[{ required: true, message: "请输入昵称" }]}>
                <Input />
            </Form.Item>
            <Form.Item name="sex" rules={[{ required: true, message: "请选择性别" }]} >
                <Select>
                    <Select.Option value={0} >男</Select.Option>
                    <Select.Option value={1} >女</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name="age" rules={[{ required: true, message: "请输入年龄" }]}>
                <Input type="number" />
            </Form.Item>
            <Button htmlType="submit" loading={props.isLoading}>注册</Button>
        </Form>
    )
}

export default Register