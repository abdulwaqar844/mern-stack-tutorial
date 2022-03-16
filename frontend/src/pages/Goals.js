import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteGoals, getGoals } from "../features/goal/goalSlice";

function Goals() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goal
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());
  }, [user, navigate, isError, message, dispatch]);
  if (isLoading) {
    return <div> Loading ...</div>;
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Goal</th>
            <th scope="col">Status</th>
            <th scope="col">Created Date</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {goals &&
            goals.map((goal) => {
              return (
                <tr key={goal?._id} scope="row">
                  <td>{goal?.task}</td>
                  <td>{goal?.status}</td>
                  <td>{new Date(goal?.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => dispatch(deleteGoals(goal._id))}
                      className="btn btn-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Goals;