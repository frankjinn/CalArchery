import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Navagation from './components/Nav';

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navagation/>
      </div>
    </ChakraProvider>
  );
}

export default App;
