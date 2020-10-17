import React, { useRef } from 'react';
import {render} from 'react-dom';
import { useReactToPrint } from 'react-to-print';
import { useBarcode } from '@createnextapp/react-barcode';
var QRCode = require('qrcode.react');

const App=()=> {
    const { inputRef } = useBarcode({
      value: 'Barcode',
      options: {
        background: '#ffff00',
      }
    });
    return <><div className="text-center">  <img ref={inputRef} /></div>;
    </>
}
class ComponentToPrint extends React.Component {
    render() {
      return (<>
        <div className="text-center">
            <h1>Its a Sample PDF</h1>

            <QRCode
            id="123456"
            value="123456"
            size={290}
            level={"H"}
            includeMargin={true}
            />
            
        </div>
</>
      );
    }
  }
  const Example = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
   
    return (
      <div>
        <ComponentToPrint ref={componentRef} />
        <button onClick={handlePrint}>Print this out!</button>
      </div>
    );
  };

  var AllApp = function (){
    return (
        <div>

<App />
            <Example />
          
        </div>
        );
}
export default AllApp;



