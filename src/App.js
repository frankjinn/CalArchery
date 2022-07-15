import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Navagation from './components/Nav';
import Home from './components/Home'
import Footer from './components/Footer'
function App() {
  return (
    <ChakraProvider>
      <div>
        <Navagation/>
        <Home/>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
