import axios from 'axios';

const url = 'https://drumhore.herokuapp.com';

export const getUser = () => {
    return {
        type: 'GET_USER',
        payload: axios.get(`${url}/scores/`, {
            headers: {
                "authorization": "x-control-app",
            }
        }),

    }
};
