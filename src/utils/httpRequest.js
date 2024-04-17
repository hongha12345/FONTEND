import axios from 'axios';
import { base_url } from "./axiosConfig";

const httpRequest = axios.create({
    baseURL: base_url
});


export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response;
};

export const post = async (path, roleName) => {
    const response = await httpRequest.post(path, roleName);

    return response;
};

export const put = async (path, options = {}) => {
    const response = await httpRequest.put(path, options);

    return response;
};

export const deleteRequest = async (path) => {
    const response = await httpRequest.delete(path);
    return response.data ? response.data : { statusCode: response.status };
};

export default httpRequest;
