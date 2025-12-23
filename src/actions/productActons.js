
//Константы для типов действий
// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const TOGGLE_PRODUCT = "TOGGLE_PRODUCT";

import { dataItems } from "../data/json";

// export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const FETCH_PRODUCT_START = "FETCH_PRODUCT_START";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

// //Создание задачи
// export const addProduct = (text) => ({
//     type: ADD_PRODUCT, //Тип действия
//     payload: { text }, // Полезная нагрузка действия
// });

// //Изменение статуса задачи (выполнено/не выполнено)
// export const toggleTodo = (id) => ({
//     type: TOGGLE_PRODUCT,
//     payload: { id },
// });
// //Удаление задачи
// export const deleteTodo = (id) => ({
//     type: TOGGLE_PRODUCT,
//     payload: { id },
// });

export const fetchProductData = () => async dispatch => {
    dispatch({ type: 'FETCH_PRODUCT_START' });
    try {

        // const response = await fetch('./tasks.JSON');
       // const toDoData = await response.json();

    
            const products = JSON.parse(dataItems);
          //  console.log(products);
            dispatch({type: 'FETCH_PRODUCT_SUCCESS', payload: products});


  
    } catch (error) {
        dispatch({type: 'FETCH_PRODUCT_FAILURE', payload: error.message });
    }
};