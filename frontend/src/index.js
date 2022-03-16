import React from "react";
import { render } from "react-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTask from "./pages/NewTask";

const Index = () => (
  <Provider store={store}>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="goal/createNew" element={<NewTask />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

render(<Index />, document.getElementById("root"));
