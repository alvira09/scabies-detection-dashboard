import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const ImageCropper = ({ uploadedImage, setCroppedImage }) => {
  const cropperRef = useRef(null);

  const cropImage = () => {
    if (cropperRef.current) {
      setCroppedImage(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div>
      <Cropper
        src={uploadedImage}
        style={{ height: 400, width: '100%' }}
        aspectRatio={1}
        guides={false}
        ref={cropperRef}
      />
      <button onClick={cropImage}>Crop Image</button>
    </div>
  );
};

export default ImageCropper;
