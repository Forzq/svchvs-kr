import { $authHost, $host } from "./index";
import { jwtDecode } from 'jwt-decode';

export const registration = async (email, password) => {
    const { data } = await $host.post('api/Users/registration', { email, password, role: 'ADMIN' });
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/Users/login', { email, password });
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token); 
}

export const check = async () => {
    try {
        const {data} = await $authHost.get('api/Users/auth');
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
    } catch (error) {
        return error
    }
}

export const getProfile = async () => {
    const { data } = await $authHost.get('api/Users/profile');
    return data; // Вернет информацию о пользователе
};
export const logout = async () => {
    try {
        localStorage.removeItem('token');
    } catch (error) {
        console.error("Failed to logout:", error);
    }
}