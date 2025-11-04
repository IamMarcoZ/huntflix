import { Grid } from '@mui/material';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <Grid container>
        <Grid size={12}>
            <img src={logo}/>
        </Grid>
    </Grid>
  )
}
export default Header