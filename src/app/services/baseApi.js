import axios from 'axios';
import Envorinment from '../../environment';

const get = (endpoint) => {
    return axios.get(Envorinment.url + endpoint);
}

const post = (endpoint, body) => {
    return axios.post(endpoint, body);
}

export {
    get,
    post
};