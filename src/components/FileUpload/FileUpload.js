// FileUpload.js
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Storage } from "aws-amplify";
import { toast } from "react-toastify";

const FileUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      const result = await Storage.put(file.name, file, {
        progressCallback(progress) {
          const percentage = (progress.loaded / progress.total) * 100;
          setUploadProgress(percentage);
        },
      });

      console.log("File uploaded successfully:", result);

      // You can add additional logic here, e.g., update UI, trigger further actions, etc.

      toast.success("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file. Please try again.");
    } finally {
      // Reset the upload progress after the upload is complete or encounters an error
      setUploadProgress(0);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to select files</p>
      </div>
      {uploadProgress > 0 && (
        <div>
          <p>Uploading: {uploadProgress.toFixed(2)}%</p>
          <progress value={uploadProgress} max="100" />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
