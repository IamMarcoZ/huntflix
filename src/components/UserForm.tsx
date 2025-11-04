import { Button, Grid, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import { useState } from "react"
import type { UserFormPropsT, UserT } from "../types/globalTypes";

const UserForm = ({addUser}:UserFormPropsT) => {
  const initialStateUser= {id:"",name:"",surname:"",age:0,userType:"",avatarColor:""};
  const [user,setUser] = useState<UserT>(initialStateUser);
  
  function getRandomColor(){
      const colors = ['red', 'green', 'blue', 'orange', 'purple', 'teal', 'brown'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
  };

  function handleUser(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>){
    let field = e.target.name;
    let value = e.target.value;
    setUser(prev => ({
      ...prev,
      [field] : value,
      id:crypto.randomUUID(),
      avatarColor: getRandomColor()
    }))
  }

  function handleClickAdd(user:UserT){
    addUser(user);
    setUser(initialStateUser);
  }

  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid size={3}>
        <TextField variant="outlined" label="Name" name="name" value={user?.name} onChange={(e)=>handleUser(e)} />
      </Grid>
      <Grid size={3}>
        <TextField variant="outlined" label="Surname" name="surname" value={user?.surname} onChange={(e)=>handleUser(e)}/>
      </Grid>
      <Grid size={3}>
        <TextField variant="outlined" label="Role" name="userType" value={user?.userType} onChange={(e)=>handleUser(e)}/>
      </Grid>
      <Grid size={1}>
        <TextField variant="filled" label="Age" name="age" value={user?.age} onChange={(e)=>handleUser(e)}/>
      </Grid>
      <Grid size={1}>
        <Button variant="outlined" onClick={()=>handleClickAdd(user)} endIcon={<SendIcon/>}>+</Button>
      </Grid>
    </Grid>
  )
}

export default UserForm