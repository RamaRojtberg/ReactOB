import axios from 'axios';

export const getJoke = async() => {
    return await axios.get('https://api.chucknorris.io/jokes/random', {
        method: 'get',
    })
}