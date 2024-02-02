import { Box } from '@mui/material';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Service from './components/service';
import Counts from './components/counts';
import Partners from './components/partners';
import Industries from './components/industries';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import CaseStudies from './components/caseStudies';
import Subscribe from './components/subscribe';
import Footer from './components/footer';



function App() {
  const [scrollPosition, setPosition] = useState(false);
    useLayoutEffect(() => {
        function updatePosition() {
          if (window.scrollY > 500) {
            setPosition(true)
          }
          else{
            setPosition(false)
          }
        }
        
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);
  return (
    <Box style={{ overflow: 'hidden' }} >
      <Navbar active={scrollPosition}/>
      <Header />
      <Service />
      <Counts />
      <Partners />
      <Industries />
      <CaseStudies/>
      <Subscribe/>
      <Footer />
    </Box>
  );
}

export default App;
