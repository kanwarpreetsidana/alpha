import React from 'react';
import { useBarcode } from '@createnextapp/react-barcode';
import Navbar from './Navbar'
function App() {

  
  const { inputRef } = useBarcode({
    value: '1122334455',
    

    options: {
      background: '#ffff00',
      displayValue: false,
    }
  });
  

  return <>
  
  <div className="text-center"><h2>A Sample PDF</h2></div>
  <br></br>
  <div className="text-center">  <img ref={inputRef} /></div>;
  <br></br>
  <br></br>
  </>  
};

export default App;