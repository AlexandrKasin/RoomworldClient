import axios from "axios";
import {SERVER} from "../../constants";
import jwt_decode from "jwt-decode";

export function login(email, password) {
    return axios.post(SERVER + '/token', {
        email: email,
        password: password
    }).then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("roles", response.data.roles);
        return response;
    }).catch((error) => {
        throw error
    })
}

export function logout() {

}

export function registration(user) {
    return axios.post(SERVER + '/registration', user).then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("roles", response.data.roles);
        return response;
    }).catch((error) => {
        throw error
    })
}

export function resetPassword(email) {
    return axios.put(SERVER + '/password/reset/' + email).then((response) => {
        return response
    }).catch((error) => {
        throw error
    })
}