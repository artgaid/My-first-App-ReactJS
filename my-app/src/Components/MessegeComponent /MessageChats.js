import { List, ListItem, ListItemIcon, Typography } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { Box } from '@material-ui/system';
import { useEffect, useState, memo } from 'react'



const MessageChats = ({ messageAuthor }) => {

    const [arrChats, setArrChats] = useState([{
        name: "",
        id: 0
    }])

    console.log('renderChat', arrChats);


    useEffect(() => {
            setArrChats((prev) => [...prev, {name: messageAuthor, id: prev.length }])
    },[messageAuthor])

    return (
        <>
            <Box>
            <Typography sx={{ mb: 1 }} variant="h6" component="div">
                Chats:
            </Typography>
                <List>
                    {arrChats.map((str) => ( (str.name !== "") ?
                        <ListItem key={str.id} 
                        alignItems="center"
                        divider="true"
                        > <ListItemIcon> <FolderIcon /> </ListItemIcon> {str.name} </ListItem> : null
                    ))}
                </List>
            </Box>
        </>
    )

};

export default  memo(MessageChats);