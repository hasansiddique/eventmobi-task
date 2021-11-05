import React from 'react';
import PropTypes from "prop-types";
import List from '@mui/material/List';
import Avatar from "@mui/material/Avatar";
import ListItem from '@mui/material/ListItem';
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const GistFiles = ({
    gistFiles,
}) => {
    const { forkedHeading } = GistFiles.styles;

    const files = Object.keys(gistFiles);

    return (
        files.length ? (
            <>
                <h4 style={forkedHeading}>File Types:</h4>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {files.map((file) => {
                        const fileObject = gistFiles[file];
                        let fileName = fileObject.type.split('/')[1];
                        fileName = `${fileName.charAt(0)}${fileName.charAt(fileName.length - 1)}`;

                        return (
                            <ListItem key={file.filename} data-testid="files-list">
                                <ListItemAvatar>
                                    <Avatar>{fileName}</Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={fileObject.filename}
                                    secondary={fileObject.type}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </>
        ) : <></>
    );
};

GistFiles.propTypes = {
    gistId: PropTypes.string,
};

GistFiles.defaultProps = {
    gistId: '',
};

GistFiles.styles = {
    forkedHeading: { textAlign: 'left', margin: '15px 15px 0' },
};

export default GistFiles;
