import React, { createContext, useState } from "react";

// Создаем контекст для фильтра
export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    // Локальное состояние для хранения текущего фильтра
    const [filter, setFilter] = useState(["XS", "S", "M", "L"]);
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};