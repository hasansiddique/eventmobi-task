import PropTypes from "prop-types";
import List from '@mui/material/List';
import Avatar from "@mui/material/Avatar";
import ListItem from '@mui/material/ListItem';
import React, {useEffect, useState} from 'react';
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import request from "../api";


const GistForks = ({
    gistId,
}) => {
    const { forkedHeading } = GistForks.styles;
    const [forkedGists, setForkedGists] = useState([]);

    useEffect(() => {
        getForkedGistsList(gistId);
    }, []);

    const getForkedGistsList = (id) => {
        if (!gistId) {
            setForkedGists([]);
            return;
        }

        const response = request.get(`/gists/${id}/forks`);

        response
            .then((res) => {
                setForkedGists(res.data);
            })
            .catch(() => {
                setForkedGists([]);
            });
    }

    const filteredList = forkedGists.length && forkedGists.slice(-3);

    return (
        filteredList.length ? (
            <>
                <h4 style={forkedHeading}>Forked:</h4>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {filteredList.map((item) => {
                        return (
                            <ListItem key={item.id} data-testid="gist-forks">
                                <ListItemAvatar>
                                    <Avatar alt={item.owner.login} src={item.owner.avatar_url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.id}
                                    secondary={item.description}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </>
        ) : <></>
    );
};

GistForks.propTypes = {
    gistId: PropTypes.string,
};

GistForks.defaultProps = {
    gistId: '',
};

GistForks.styles = {
    forkedHeading: { textAlign: 'left', margin: '15px 15px 0' },
};

export default GistForks;
