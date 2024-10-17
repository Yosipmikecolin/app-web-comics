import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Details, Home, NoFound } from "./views/index.ts";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/details/:id" Component={Details} />
            <Route path="*" Component={NoFound} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
