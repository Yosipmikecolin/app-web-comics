import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details, Home, NoFound, Signup, Login, Wishes } from "./views";
import { useUser } from "./hooks/useUser";
import { useEffect } from "react";
import { useWish } from "./hooks/useWish";
import { getWish } from "./api/queries";

const Layout = () => {
  const { setUser } = useUser();
  const { data } = getWish();
  const { setWishes } = useWish();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUser(username);
    }
  }, []);

  useEffect(() => {
    if (data?.comics.length) {
      setWishes(data.comics);
    }
  }, [data]);

  return (
    <BrowserRouter basename="/">
      <Toaster />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />
          <Route path="/details/:id" Component={Details} />
          <Route path="/wishes" Component={Wishes} />
          <Route path="*" Component={NoFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
