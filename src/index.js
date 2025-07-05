import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={App}/>);