import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Details, Home } from "./views/index.ts";
import { NoFound } from "./views/not-found/NoFound.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/details/:id" Component={Details} />
          <Route path="*" Component={NoFound} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
