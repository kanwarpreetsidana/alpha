import React from 'react';
var QRCode = require('qrcode.react');

function qrcd() {

const downloadQR = () => {

    const canvas = document.getElementById("123456");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
  return(
  <>
<div>
  <QRCode
    id="12345"
    value="http://omegasolutions.tk"
    size={290}
    level={"H"}
    includeMargin={true}
  />
  <button type="button" className="btn btn-success" onClick={downloadQR}> Download QR </button>
 
</div>
<br></br>
<br></br>
</>
  );
};

export default  qrcd;
