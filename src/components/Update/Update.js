import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    firstname: "Alex",
    lastname: "bob",
    phone: "909090909",
    googleid: "123",
    scoupusid: "123",
    publicaitonname: "abc",
    publicaitondate: "date",
    publicaitonurl: "https://google.com",
    patentname: "abc",
    patentdate: "date",
    patenturl: "https://google.com",
    //more fields...
  },
];

function Update(props) {
  //userid from url params
  const { userId } = useParams();
  const [Data, setData] = useState(dummyData[0]);
  useEffect(() => {
    //fetch details of user with userId
    //update setData() with response
  }, []);

  const handleInputChange = (event, key) => {
    setData((prevFormData) => ({
      ...prevFormData,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // update the details in data base using id
    console.log(Data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {Object.keys(Data).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={Data[key]}
              onChange={(event) => handleInputChange(event, key)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Update;
