import axios from 'axios';

const htmlRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (path, options = {}) => {
    const response = await htmlRequest.get(path, options);
    return response.data;
};
export default htmlRequest;
