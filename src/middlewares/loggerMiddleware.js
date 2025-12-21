//import {store} from './store'

//EX2
const loggerMiddleware = (store) => (next) => (action) => {
    console.log("dispatching", action);
    return next(action);
};

export default loggerMiddleware;