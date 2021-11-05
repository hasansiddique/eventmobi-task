import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
    const { container } = Spinner.styles;

    return (
        <div style={container}>
            <CircularProgress />
        </div>
    );
};

Spinner.styles = {
    container: {
        padding: 25,
    }
}

export default Spinner;
