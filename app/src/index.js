import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    }
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);