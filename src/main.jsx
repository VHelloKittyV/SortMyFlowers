import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Archive from "./Components/Pages/Archive.jsx";
import Calendar from "./Components/Pages/Calendar.jsx";
import Dictionary from "./Components/Dictionary/Dictionary.jsx";
import "./index.css";


const router = createBrowserRouter([
    {
        path: "/SortMyFlowers",
        element: <App />,
    },
    {
        path: "/SortMyFlowers/archive",
        element: <Archive />,
    },
    {
        path: "/SortMyFlowers/calendar",
        element: <Calendar />,
    },
    {
        path: "/SortMyFlowers/dictionary",
        element: <Dictionary />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);
