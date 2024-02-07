"use client";
import { NextResponse } from "next/server";
import styles from "./page.module.css";
import { headers } from 'next/headers'
import { useState } from "react";


export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle uploading logic here, e.g., sending the image to a server
    console.log("Uploading file:", selectedFile);
  };

  
  return (
    <main>
      <h2>Image Uploader</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {selectedFile && (
        <div>
          <h4>Selected Image:</h4>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>
      )}
    </main>
  );
}
