import React, { useEffect, useState } from 'react';
import FileUpload from './FileUpload';
import ImageCropper from './ImageCropper';
import './Dashboard.css'; // Import CSS for Dashboard
import usePredict from '../usePredict';

const Dashboard = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  // C:\Users\Admin\Documents\SEMANGAT SKRIPSI ;)))\efficientnetb0_notop.h5
  const { predict, isPending } = usePredict();

  const handleDetection = async (e) => {
    e.preventDefault();
        if (croppedImage) {
            await predict(croppedImage);
        } else {
            alert("Please select a file to upload.");
        }
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setCroppedImage(e.target.files[0]);
  }


  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="app-title">Skin Disease App</div>
        <div className="menu-item">Dashboard</div>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="user-greeting">Hi, User</div>
        </header>
        <section className="stats-section">
          <div className="stat-card">
            <h3>0</h3>
            <p>Terindikasi Penyakit kulit Scabies</p>
          </div>
          <div className="stat-card">
            <h3>0</h3>
            <p>Terindikasi Penyakit Dermatitis</p>
          </div>
          <div className="stat-card">
            <h3>0</h3>
            <p>Kulit Sehat</p>
          </div>
        </section>
        <section className="detection-section">
          <h2>Lakukan Deteksi</h2>
          {/* <FileUpload setUploadedImage={setUploadedImage} /> */}
          {/* {uploadedImage && (
            <ImageCropper
              uploadedImage={uploadedImage}
              setCroppedImage={setCroppedImage}
            />
          )} */}
          <input type='file' onChange={handleFileChange} style={{ 
            display: "block",
            width: "fit-content",
            margin: "auto",
            marginBottom: "1rem"
           }} />
          {croppedImage && (
            <button onClick={handleDetection}>
              {isPending ? "Sedang Mendeteksi..." : "Mulai Deteksi"}
            </button>
          )}
        </section>
      </main>
    </div>
  );
};



export default Dashboard;
