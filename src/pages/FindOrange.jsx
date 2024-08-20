import React, { useState, useRef, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FindOrange = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (cameraActive && videoRef.current) {
      const startVideo = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        } catch (err) {
          console.error('Error accessing webcam:', err);
        }
      };
      startVideo();
    }
  }, [cameraActive]);

  const handleCameraClick = () => {
    setCameraActive(true);
    setCapturedImage(null);
  };

  const handleCaptureClick = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
      setCapturedImage(imageDataUrl);
      setCameraActive(false);

      // Stop the video stream
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const handleSubmit = () => {
    // Handle submit logic here
    console.log("Image submitted");
  };

  const handleSpeakClick = () => {
    const text = "FIND SOMETHING";
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div class="flex flex-col items-center justify-between min-h-screen bg-[#1390D2] p-4 text-white relative">
    <div class="w-full flex justify-between items-center">
      <img src="assets/images/FindnSpeak.svg" width="21%" class="ml-20 mt-5" />
      <div class="flex items-center">
        <img src="assets/images/yellowcheckmark.svg" width="15%" class="mt-5" />
      </div>
    </div>
    <div className='ml-2'>
        <h2 class="text-3xl font-bold mb-60">FIND SOMETHING</h2>

    </div>
    {cameraActive && (
      <div class="relative w-full max-w-md aspect-square">
       <div className='-mt-50'>
        <video
            ref={videoRef}
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
            autoPlay
          /> 
       </div>
        <button
          onClick={handleCaptureClick}
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        ></button>
      </div>
    )}
  
    {!cameraActive && !capturedImage && (
      <div class="flex space-x-4 mb-40">
        <button
          onClick={handleCameraClick}
          class="w-16 h-16 bg-white rounded-full shadow-md hover:bg-gray-100 transition flex items-center justify-center"
        >
          <i class="fas fa-camera text-2xl text-black"></i>
        </button>
        <button
          onClick={handleSpeakClick}
          class="w-16 h-16 bg-white rounded-full shadow-md hover:bg-gray-100 transition flex items-center justify-center"
        >
          <i class="fas fa-volume-up text-2xl text-black"></i>
        </button>
      </div>
    )}
  
    
  
    {capturedImage && (
      <div class="w-full max-w-md aspect-square">
        <div className='-mt-10'>
             <img src={capturedImage} alt="Captured" class="w-full h-full object-cover rounded-lg" />
        </div>
       <div className='mt-1 ml-20'>
       <button
          onClick={handleSubmit}
          class="submit_button cursor-pointer border-[.2rem] border-solid border-black  rounded-[.5rem] text-white font-bold p-[1rem] w-[8rem] flex items-center justify-center text-center text-[1.3rem] bg-[#e97813]"
        >
          Submit
        </button>
       </div>
      </div>
    )}
  
    <canvas ref={canvasRef} style={{ display: 'none' }} />
  </div>
  );
};

export default FindOrange;
