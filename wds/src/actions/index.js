import axios from 'axios';

export const contact = (passedstate) => {
    //post req sends info aka state; proxy set up in package.json tells front end to send to that API
    return axios.post('/api/v1/form/sendmessage', passedstate);
}