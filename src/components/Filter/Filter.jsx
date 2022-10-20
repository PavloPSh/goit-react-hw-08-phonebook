import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

import { FilterItem } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    const filterId = nanoid(); 
    return (
        
            <FilterItem htmlFor={filterId}>
                Find contact by name:
                <input
                    id={filterId}
                    type="text"
                    name='filter'
                    value={value}
                    onChange={ onChange } />
            </FilterItem>
        
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

