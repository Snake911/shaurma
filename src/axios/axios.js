import axios from 'axios';

export default axios.create({
    baseURL:'https://food-nt.firebaseio.com/'
})