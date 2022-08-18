import React, { useCallback } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


const videoConstraints ={
width:250,
height: 400,
facingMode: "user",

};
function WebcamCapture(){
    const webCamRef = React.useRef(null);
    const capture = useCallback(()=>{
        const imageSrc= webCamRef.current.getScreenshot();
        console.log(imageSrc);
    },[webCamRef]);

    return (<div className='webcamCapture'>
        <Webcam audio={false}
            height={videoConstraints.height} ref={webCamRef}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}/> 
            <RadioButtonUncheckedIcon
       className="webcamCapture_button"
       onClick={capture} fontSize="large"/>    
       </div>);
       
}

export default WebcamCapture;
