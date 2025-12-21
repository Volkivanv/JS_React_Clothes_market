import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS } from "../actions/productActons";

const initialState = [
    {
        
        id: 13131,
        title: "ELLERY X M'O CAPSULE",
        imgUrl: "./img/image_1.png",
        imgAlt: "image_1",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        size : "L",
        price: 51
    },
    {
        id: 131342,
        title: "ELLERY X M'O CAPSULE",
        imgUrl: "./img/image_2.png",
        imgAlt: "image_2",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        size : "M",
        price: 52
    },
];

// Редьюсер для обработки действий с задачами
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_TODO:
        //     // Добавляем новую задачу в список
        //     return [...state, { id: Date.now(), text: action.payload.text, completed: false }];
        // case TOGGLE_TODO:
        //     // Изменяем статус задачи
        //     return state.map((todo) =>
        //         todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        //     );
        // case DELETE_TODO:
        //     return state.filter((todo) => todo.id !== action.payload.id);
        case FETCH_PRODUCT_START:
            return {
                ...state,
                error: null,
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
            };
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                products: action.error,
            };

        default:
            return state;
    }
};

export default productReducer;
