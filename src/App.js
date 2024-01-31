import { Box } from '@mui/material';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Service from './components/service';



function App() {
  return (
    <Box style={{width:'100%',height:'100%',overflow:'hidden'}}>
      <Navbar />
      <Header />
      <Service />
    </Box>
  );
}

export default App;
