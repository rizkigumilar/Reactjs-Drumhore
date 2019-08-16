import axios from 'axios';

const url = 'https://drumhore.herokuapp.com';

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/user/login`, data, {
            headers: {
                "authorization": "x-control-app",
            }
        }).then(res => {
            const token = res.data.result.token;
            const userid = res.data.result.userid;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('userid', userid);
        })
    }

};


