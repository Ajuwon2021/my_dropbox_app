import React, { useState } from "react";
import { Storage } from "aws-amplify";
import { Button, Input, Progress } from "antd";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const uploadFile = async () => {
    if (file) {
      try {
        const result = await Storage.put(file.name, file, {
          progressCallback(progress) {
            const percent = Math.round(
              (progress.loaded / progress.total) * 100
            );
            setUploadProgress(percent);
          },
        });
        console.log("File uploaded successfully", result);
      } catch (error) {
        console.error("Error uploading file", error);
      }
    }
  };

  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={uploadFile}>Upload</Button>
      {uploadProgress > 0 && (
        <Progress percent={uploadProgress} status="active" />
      )}
    </div>
  );
};

export default FileUpload;
