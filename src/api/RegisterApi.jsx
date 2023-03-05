import axios from "axios";

const axiosParams = {
    baseURL: 'http://charity-api.tala24.co/api/v1/api/v1/register'
}

const axiosInstance = axios.create(axiosParams);


const RegisterApi = (axios) => {
    return {
        post: (url, body, config = {
            withCredentials: true,
        }) =>
            axios.post(url, body, config)
                .then((response) => {
                    return response
                }).catch((error) => {
                    return error
            })
    }

}

export default RegisterApi(axiosInstance);