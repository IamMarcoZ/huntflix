import { Delete } from '@mui/icons-material'
import type { UserListPropsT, UserT } from '../types/globalTypes'
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'



const UsersList = ({ users,deleteUser }: UserListPropsT) => {

    if (users?.length == 0 || !users) {
        return (<div>Nessun utente in lista</div>)
    }

    return (
        <Grid container sx={{justifyContent:'center'}}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'red' }}>
                {users?.map((user: UserT) => {
                    return (
                        <ListItem key={user.id}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: user.avatarColor }}>
                                    {user.name[0] + user.surname[0]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={user?.name + " " + user?.surname + " " + user?.age} secondary={user?.userType} />
                            <ListItemButton onClick={()=>deleteUser(user.id)}>
                                <ListItemIcon>
                                    <Delete/>
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Grid>
    )
}

export default UsersList