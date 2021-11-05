import React, {useState} from 'react';
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';

const SearchInput = ({
    recordsExist,
    handleOnChange,
}) => {
    const [searchValue, setSearchValue] = useState('');
    const { input } = SearchInput.styles;

    const onChange = (e) => {
        const { value } = e.target;
        handleOnChange(value);
        setSearchValue(value);
    };

    return (
        <TextField
            style={input}
            label="Username"
            variant="outlined"
            id="outlined-basic"
            value={searchValue}
            onChange={onChange}
            data-testid="search-input"
            placeholder="Type Username..."
            error={(!recordsExist && searchValue) === true}
            color={(recordsExist && searchValue) ? "success" : ""}
        />
    );
};

SearchInput.styles ={
    input: {
        width: 500,
    }
}

SearchInput.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    recordsExist: PropTypes.bool,
};

SearchInput.defaultProps = {
    recordsExist: false,
    searchValue: '',
};

export default SearchInput;
