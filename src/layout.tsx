import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details, Home, NoFound, Signup, Login } from "./views";
import { useUser } from "./hooks/useUser";
import { useEffect } from "react";

const Layout = () => {
  const { setUser } = useUser();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUser(username);
    }
  }, []);

  return (
    <BrowserRouter basename="/">
      <Toaster />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />
          <Route path="/details/:id" Component={Details} />
          <Route path="*" Component={NoFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
