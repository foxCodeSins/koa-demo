import Axios from "axios";

export const listUser = () => Axios.get('/v1/user') 