
import { create } from 'axios';


const API = create({
    baseURL: process.env.REACT_APP_API_URL,
});


export const register = async (data) => {
    try {
        const res = await API.post(`auth/register`, data)
            .catch((e) => {
                return e;
            })
            ;
        return res
    } catch (error) {
        return error;
    }
}