import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details, Home, NoFound, Signup } from "./views";

const Layout = () => {
  return (
    <BrowserRouter basename="/">
      <Toaster />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signup" Component={Signup} />
          <Route path="/details/:id" Component={Details} />
          <Route path="*" Component={NoFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
