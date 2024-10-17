import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Details, Home, NoFound, Signup } from "./views/";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/signup" Component={Signup} />
            <Route path="/details/:id" Component={Details} />
            <Route path="*" Component={NoFound} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
