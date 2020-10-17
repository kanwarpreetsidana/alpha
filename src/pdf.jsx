

import React, {PureComponent} from 'react';
import jsPDF from 'jspdf';
var QRCode = require('qrcode.react');

export default class PdfGenerator extends PureComponent{

    constructor(props){
        super(props)
        this.state={

        }
    }
    jsPDFGenerator=()=>{
        const canvas = document.getElementById("123456");
        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "123456.png";
        console.log(downloadLink);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        var doc=new jsPDF('p','pt');
        doc.text(20,20,'default')
        doc.setFont('courier')
        doc.save("generated.pdf")
    }
    render(){
        return(<>
<div>     <QRCode
                    id="123456"
                    value="123456"
                    size={290}
                    level={"H"}
                    includeMargin={true}
                />
                </div> 
        <button onClick={this.jsPDFGenerator}> Generate</button>
</>        )
    }
}
