import PropTypes from 'prop-types';
import { nanoid } from "nanoid"

export const Filter = ({ value, onChange }) => {
    const filterId = nanoid(); 
    return (
        <div>
            <label htmlFor={filterId}>
                Find contact by name:
                <input
                    id={filterId}
                    type="text"
                    name='filter'
                    value={value}
                    onChange={ onChange } />
            </label>
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

