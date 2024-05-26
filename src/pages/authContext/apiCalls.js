import axios from 'axios'
import { loginFailure, loginSuccess, loginStart,logoutSuccess } from './AuthActions'

export const login = async(user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`https://nodejs-server-1-o4q8.onrender.com/api/auth/login`, user);
        dispatch(loginSuccess(res.data));
        console.log(res.data);
    } catch(err) {
        dispatch(loginFailure());
    }
}

export const loginAI = async(user, dispatch) => {
    dispatch(loginStart());
    try {
    
        const res = await axios.post(`http://localhost:8800/api/auth/loginAI`, user);
        dispatch(loginSuccess(res.data));
    } catch(err) {
        dispatch(loginFailure());
    }
}
export const logout = async(dispatch) => {
    try {
        dispatch(logoutSuccess());
    } catch(err) {
        console.log(err);
    }
}