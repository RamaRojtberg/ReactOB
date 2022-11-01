// Async Actions Types
export const API_CALL_REQUEST = 'API_CALL_REQUEST'; // Watcher Saga listens
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; // Dispached by Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE'; // Dispached by Worker Saga

export const login = (email, password) => {

    return { //retornamos una acción. La acción está compuesta por type y el payload
        type: API_CALL_REQUEST,
        payload: { // El payload va a ser la petición que tiene que realizarse
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }
            },
            okAction: API_CALL_SUCCESS, //Acción que tiene que realizar si sale bien
            failAction: API_CALL_FAILURE //Acción que tiene que realizar si algo sale mal
        } 
    }

}

/*
* Generic HttpRequest Action Dispatcher
*/
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: { // El payload va a ser la petición que tiene que realizarse
            request: {
                method: method,
                url: url,
                data: data,
            },
            okAction: API_CALL_SUCCESS, //Acción que tiene que realizar si sale bien
            failAction: API_CALL_FAILURE //Acción que tiene que realizar si algo sale mal
        }
    }
}