import React, { FC, useEffect, useState } from "react";
import { Card, CardTitle, Button } from "hilfling-gui/lib";
import FormData from 'form-data'
const axios = require('axios').default;


const TestImageUpload: FC<{}> = () => {

  const [file, setFile] = useState(undefined);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    /*
    var formData = new FormData();
    formData.append("Title", "Test");
    axios.post('http://localhost:8080/albums', {title: "testAlbum"}).then(function (response: any) {
      // handle success
      console.log(response, "YEEEEEEEEEES");
    })*/
    
    event.preventDefault();
    var formData = new FormData();
    var imagefile = file;
    if(imagefile != null){
      formData.append("file", imagefile);
    }
    //formData.append("type", "PROFILE");
    console.log(formData)
    axios.post('http://localhost:8080/photos/profile', formData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
        }
    }).then((response: { json: () => any; }) => response.json())
    .then((result: any) => console.log('Files successfully uploaded!', result))
    .catch((error: any) => console.log(error));
  };

  const selectFile = (event: { target: { files: any; }; }) => {
    setFile(event.target.files);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label id="security">Security level:</label>
            <select>
                <option id="1">1</option>
            </select>
            <label id="image">Last opp bilde!</label>
            <input type="file" id="file" name="file" onChange={selectFile}></input>
            <input type="submit" name="submit"></input>
        </form>
    </div>
  );
};

export default TestImageUpload;
