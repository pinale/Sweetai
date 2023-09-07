import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        axios
          .get("/data.json")
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            setError(error.message);
          });
      });
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
