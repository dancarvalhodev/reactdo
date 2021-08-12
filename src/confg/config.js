const ENV = 'dev';
let URL_API = '';

if (ENV === 'dev') {
    URL_API = 'http://localhost:8000';
} else {
    URL_API = 'https://api.reactdo.app';
}


export default URL_API;