import axios, { AxiosResponse } from 'axios'

axios.interceptors.request.use((config) => {
    console.log(config)
    return config
})

axios.interceptors.response.use((res: AxiosResponse<any>) => {
    if(res.status === 200) {
        return res.data
    }
    return res
})