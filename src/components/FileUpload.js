import React from 'react';
import { useDropzone } from 'react-dropzone';
import './FileUpload.css'; // Import CSS for FileUpload

const FileUpload = ({ setUploadedImage }) => {
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input name='file' {...getInputProps()} />
      <p>Choose file</p>
    </div>
  );
};

export default FileUpload;
