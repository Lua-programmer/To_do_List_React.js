import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Api from "../../src/api/api";

const List = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const response = await Api.fetchGetAll();
    const data = await response.json();
    setTasks(data); 
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {tasks.map(
        (
          task,
          index
        ) => (
          <Card data={task} key={index} />
        )
      )}
    </div>
  );
};

export default List;
