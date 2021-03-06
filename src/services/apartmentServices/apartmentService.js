import axios from "axios";
import {SERVER} from "../../constants";

export function getTypesApartment() {
    return axios.get(SERVER + '/apartment/types')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function createApartment(formData) {
    return axios.post(SERVER + '/apartment/create', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
    });
}

export function getApartmentById(id) {
    return axios.get(SERVER + '/apartment/get', {params: {id: id}})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function getApartmentByParams(searchParams) {
    return axios.post(SERVER + '/collection/apartment', searchParams)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function getAmountApartmentByParams(searchParams) {
    return axios.post(SERVER + '/collection/apartment/amount', searchParams)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function getUsersApartment() {
    return axios.get(SERVER + '/collection/users/apartment')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function createReservation(reservationParams) {
    return axios.post(SERVER + '/reservation/create', reservationParams)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}

export function getUserReservations() {
    return axios.get(SERVER + '/users/reservations')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}
