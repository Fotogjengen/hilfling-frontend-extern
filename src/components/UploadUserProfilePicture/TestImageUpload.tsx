import React, { FC, useEffect, useState } from "react";
import { Card, CardTitle, Button } from "hilfling-gui/lib";
import FormData from 'form-data';
import { useForm } from "react-hook-form";
const axios = require('axios').default;

//Image uploader for profile pictures
const TestImageUpload: FC<{}> = () => {

  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(undefined);

  function onChange(e : any){
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  function onSubmit(e : any){
    e.preventDefault();
    var formData = new FormData();
    formData.append("file", file);
    axios.post('http://localhost:8080/photos/profile', formData, {headers: {
      'Content-Type': `multipart/form-data;`}
    }).then((response: { json: () => any; }) => response.json())
    .then((result: any) => console.log('Files successfully uploaded!', result))
    .catch((error: any) => console.log(error));

    console.log(formData);
  };


  return (
    <div>
        <form onSubmit={onSubmit}>
          <input ref={register} type="file" name="image" onChange={(e) => onChange(e)}/>
          <button>Submit</button>
        </form>
    </div>
  );
};

export default TestImageUpload;
