import { Box } from '@mui/material';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Service from './components/service';
import Counts from './components/counts';



function App() {
  return (
    <Box style=overflow: 'hidden' }}>
      <Navbar />
      <Header />
      <Service />
      <Counts />
    </Box>
  );
}

export default App;
