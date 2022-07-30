import { create } from 'axios';


const API = create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const login = async (data) => {
    try {
        const res = await API.post(`auth/login`, data)
            .catch((e) => {
                return e;
            })
            ;
        return res
    } catch (error) {
        return error;
    }
}