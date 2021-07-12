import axios from 'axios'

export const login = (username: string, password: string) => axios.post('/v1/login', { username, password })