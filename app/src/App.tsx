import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <>
    <BrowserRouter>
      <Header/>
      <Routes>
         <Route path='/' element={<Calculator />} />
     </Routes>
    </BrowserRouter>
    
      
    </>
   
  );
}

export default App;
