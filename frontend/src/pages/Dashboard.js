import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Goals from "./Goals";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (user === null || !user) {
      navigate("/login");
  
    }
  }, [user, navigate, isError, message, dispatch]);
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div
      className="container flex flex-col"
      style={{
        justifyContent: "center",
        alignItems: "center",

        margin: "0rem 7rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "1rem" }}>Welcome {user && user.fullname}</h1>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",

              width: "23rem",
            }}
          >
            <div>
             
              <h2>Goals</h2>
            </div>
            <a href="goal/createNew" className="btn btn-success">Add New Goal</a>
          </div>
        </div>
        <Goals />
      </div>
    </div>
  );
}

export default Dashboard;
