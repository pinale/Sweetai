import React, { useEffect, useState } from "react";
import { List, ListProps, useList } from "@pankod/refine";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <List
      {...(useList <
        ListProps <
        "id" >>
          {
            resource: "posts",
            initialSorter: [{ field: "id", order: "asc" }],
          })}
    >
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </List>
  );
};

export default Dashboard;
