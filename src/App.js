import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import {Nav, Footer, Home, About} from "./components"
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <div>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
