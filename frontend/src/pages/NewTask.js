import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createGoal } from "../features/goal/goalSlice";

function NewTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [TaskData, setTaskData] = useState({
    task: "",
    taskStatus: false,
  });

  const HanldeChange = (e) => {
    setTaskData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal(TaskData));
    navigate("/");
  };
  //onChange={HanldeChange}
  return (
    <div className="container-sm">
      <h2>Add New Task</h2>
      <form className="flex flex-col w-72" onSubmit={HandleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
         
          </label>
          <input
            onChange={HanldeChange}
            type="text"
            className="form-control"
            name="task"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="taskStatus"
            value={TaskData.taskStatus}
            // onChange={HanldeChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            True | False
          </label>
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewTask;
