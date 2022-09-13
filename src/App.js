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
        <div>
          <Routes>
            <Route path="/CalArchery" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
