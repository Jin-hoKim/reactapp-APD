import axios from 'axios';

export function getAPOD(date) {
    if( date ) {
        console.log("call api : " + `https://api.nasa.gov/planetary/apod?api_key=mM6RJzfJF52ckOKdDdHTsavQ9NRS1sEdhL54WObA&date=${date}`);
        return axios.get(`https://api.nasa.gov/planetary/apod?api_key=mM6RJzfJF52ckOKdDdHTsavQ9NRS1sEdhL54WObA&date=${date}`);
    }
    else {
        console.log("call api : " + `https://api.nasa.gov/planetary/apod?api_key=mM6RJzfJF52ckOKdDdHTsavQ9NRS1sEdhL54WObA`);
        return axios.get(`https://api.nasa.gov/planetary/apod?api_key=mM6RJzfJF52ckOKdDdHTsavQ9NRS1sEdhL54WObA`);
    }
}
