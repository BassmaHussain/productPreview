import React from "react";
import QrImage from "../images/image-qr-code.png"
import "./qrComponent.css"
const QrComponent = () =>{
    return(
        <div className="qr-cont">
            <div className="qr">
                    <div className="qr_img">
                    <img src={QrImage} alt="qrCode" />
                    </div>
                    <div className="details">
                        <h1>Improve Your front-end skills by building projects</h1>
                        <p>Scan the QR code to visit Frontend  Mentor and take your coding skills to the next level</p>
                    </div>
            </div>
        </div>
    )
}

export default QrComponent;