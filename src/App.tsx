import './App.css'
import "flag-icons/css/flag-icons.min.css";
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer.tsx';
import Body from './components/Body';
import Loader from './components/Loader';

function App() {


  return (
    <Box sx={{minHeight: '90vh',display: 'flex',flexDirection: 'column',color: '#919299'}}>
      <Header />
      <Loader />
      <Body />
      <Footer />
    </Box>
  )
}

export default App
