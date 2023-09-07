import React, { useState, useEffect } from "react";
import { Table, Space, Button } from "refine";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Table
      data={data}
      columns={[
        {
          title: "Title",
          dataIndex: "title",
        },
        {
          title: "Body",
          dataIndex: "body",
        },
        {
          title: "Actions",
          key: "action",
          render: (text, record) => (
            <Space size="middle">
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Space>
          ),
        },
      ]}
    />
  );
};

export default Dashboard;
