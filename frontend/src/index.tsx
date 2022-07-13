import React from "react";
import ReactDOM from "react-dom/client";
// import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";

// let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PersistGate>
);
