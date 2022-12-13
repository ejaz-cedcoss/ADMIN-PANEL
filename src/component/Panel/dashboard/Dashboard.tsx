import React, { FC, useState } from "react";
import { getRequest, postRequest } from "../../../services/Request/Request";

let url = `https://jsonplaceholder.typicode.com/users`;

interface userI {
  name?: any;
}

const Dashboard: FC = () => {
  const [userdata, setUserData] = useState<userI[]>([]);

  const getData = () => {
    getRequest(url)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  const postData = () => {
    let pid = {
      username: "ejaz",
      pincode: 854236,
    };
    postRequest(url, pid).then((res) => console.log(res));
  };

  // <=======================> //
  const updateData = () => {
    // putRequest(url)
  };
  const deleteData = () => {};

  console.log(userdata);

  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{ marginBottom:"35px" }}>Dashboard section </h1>
      <button onClick={() => getData()}>get data</button>&emsp;
      <button onClick={() => postData()}>post data</button>&emsp;
      <button onClick={() => updateData()}>put/upddate</button>&emsp;
      <button onClick={() => deleteData()}>delete</button>
      <ul>
        {userdata.length !== 0
          ? userdata.map((val) => {
              return (
                <>
                  <li>{val.name}</li>
                </>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default Dashboard;
