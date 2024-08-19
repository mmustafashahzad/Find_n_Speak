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

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#1390D2] p-4 text-white relative">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-300">Find<span className="text-white">-n-</span>Speak</h1>
        <div className="flex items-center">
          <span className="mr-2">LEVEL : Beginer</span>
          <i className="fas fa-pencil-alt text-yellow-300 mx-1"></i>
          <i className="far fa-pencil-alt mx-1"></i>
          <i className="far fa-pencil-alt mx-1"></i>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mt-20 mb-20">FIND SOMETHING CREAM</h2>
      
      {!cameraActive && !capturedImage && (
        <button
          onClick={handleCameraClick}
          className="w-16 h-16 bg-white rounded-full shadow-md hover:bg-gray-100 transition flex items-center justify-center"
        >
          <i className="fas fa-camera text-2xl text-[#1390D2]"></i>
        </button>
      )}
      
      {cameraActive && (
        <div className="relative w-full max-w-md aspect-square mb-20">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            autoPlay
          />
          <button
            onClick={handleCaptureClick}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          ></button>
        </div>
      )}
      
      {capturedImage && (
        <div className="w-full max-w-md aspect-square mb-20">
          <img src={capturedImage} alt="Captured" className="w-full h-full object-cover rounded-lg" />
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 bg-white text-[#1390D2] rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </div>
      )}
      
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default FindOrange;