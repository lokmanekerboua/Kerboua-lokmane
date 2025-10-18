import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/outfit";
import "@fontsource/roboto";
import {ThemeProvider} from "./ThemeContext";
import {LanguageProvider} from "./LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <App/>
            </LanguageProvider>
        </ThemeProvider>
    </React.StrictMode>
);
