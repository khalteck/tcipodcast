import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
