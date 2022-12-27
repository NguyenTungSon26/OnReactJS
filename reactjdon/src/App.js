import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import User from "./pages/User";
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <div id="wrapper" className="container">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/posts" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
