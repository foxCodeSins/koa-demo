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
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            onFinish={props.handleRegister}
            initialValues={{...props}}
        >
            <Form.Item name="username" label="用户名" rules={[{ required: true, message: "请输入账户"}]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" label="密码" rules={[{ required: true, message: "请输入密码"}]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="rePassword" label="确认密码" rules={[{required: true, message: "请输入密码"}, (({ getFieldValue }) => ({
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
            <Form.Item name="name" label="姓名" rules={[{ required: true, message: "请输入姓名" }]}>
                <Input />
            </Form.Item>
            <Form.Item name="sex" label="性别" rules={[{ required: true, message: "请选择性别" }]} >
                <Select>
                    <Select.Option value={0} >男</Select.Option>
                    <Select.Option value={1} >女</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name="age" label="年龄" rules={[{ required: true, message: "请输入年龄" }]}>
                <Input type="number" />
            </Form.Item>
            <Button size="middle" htmlType="submit" loading={props.isLoading}>注册</Button>
        </Form>
    )
}

export default Register