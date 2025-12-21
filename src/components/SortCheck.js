import { useContext, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
function SortCheck(props) {
    const { filter, setFilter } = useContext(FilterContext);
    const [checkedBox, setCheckedBox] = useState(true);

    const addFilter = () => {
        setFilter([...filter, props.size]);
        // console.log(filter);
    };

    const deleteFilter = () => {
        setFilter(filter.filter((inSize) => inSize !== props.size));
        // console.log(filter);
    };

    const handleCheckBox = () => {
        setCheckedBox(!checkedBox);
        
        checkedBox ? deleteFilter() : addFilter();
        
    };

    return (
        <div className="sort__check">
            <input id="sort__check1" type="checkbox" onChange={handleCheckBox} checked={checkedBox}/>
            <label for="sort__check1">{props.size}</label>
        </div>
    );
}

export default SortCheck;
