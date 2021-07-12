import axios from 'axios'

export const login = (username: string, password: string) => axios.post('/v1/login', { username, password })

export const register = (username: string, password: string, name: string, sex: number, age: number) => axios.post('/v1/register', { username, password, name, sex, age })