import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import FormData from "form-data";
import { useForm } from "react-hook-form";
import axios from "axios";

//GuiImage uploader for profile pictures
const TestImageUpload: FC = () => {
  const { register } = useForm();
  const [file, setFile] = useState<File>();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (fileList) {
      setFile(fileList[0]);
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:8080/photos/profile", formData, {
        headers: {
          "Content-Type": `multipart/form-data;`,
        },
      })
      .then((result: any) =>
        console.log("Files successfully uploaded!", result),
      )
      .catch((error: any) => console.log(error));

    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          ref={register}
          type="file"
          name="image"
          onChange={(e) => onChange(e)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TestImageUpload;
