import React from 'react';
import PropTypes from "prop-types";
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import GistForks from "./GistForks";
import GistFiles from "./GistFiles";

const GistsList = ({
    gists,
    searchValue,
}) => {
    const {
        errorMessage,
        listItem,
        forked,
        noData,
    } = GistsList.styles;


    return (
        gists.length ? (
            <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: 0, paddingTop: 0 }}>
                {gists.map((item) => {
                    return (
                        <>
                            <ListItem style={listItem} key={item.id} data-testid="gists-list">
                                <ListItemAvatar>
                                    <Avatar alt={item.owner.login} src={item.owner.avatar_url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.id}
                                    secondary={item.description}
                                />
                            </ListItem>

                            <div style={forked}>
                                <GistFiles gistFiles={item.files} />
                            </div>

                            <div style={forked}>
                                <GistForks gistId={item.id} />
                            </div>
                        </>
                    );
                })}
            </List>
        ) : (
            <>
                {searchValue
                    ?  <p style={errorMessage}>No data available.</p>
                    :  <p style={noData}>Type username to search for gists...</p>
                }
            </>
        )
    );
};

GistsList.propTypes = {
    gists: PropTypes.array,
    searchValue: PropTypes.string,
};

GistsList.defaultProps = {
    gists: [],
    searchValue: '',
};

GistsList.styles = {
    listItem: {
        border: '1px solid #e1e1e1',
        background: '#f5f5f5',
    },
    forked: {
        paddingLeft: 55,
        borderBottom: '1px solid #e1e1e1',
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
    },
    noData: {
        textAlign: 'center',
    }
};

export default GistsList;
