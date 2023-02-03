import { nanoid } from "nanoid";

import { FilterItem } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {

    const filterId = nanoid();


    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)

    const handleChange = e => {
        const { value } = e.target;
        dispatch(addFilter(value));
    };
    
    return (
        <>
        <FilterItem htmlFor={filterId}>
            Find contact by name:
            <input
                id={filterId}
                type="text"
                name='filter'
                value={filter}
                onChange={handleChange} />
        </FilterItem>
        </>
    )
};


