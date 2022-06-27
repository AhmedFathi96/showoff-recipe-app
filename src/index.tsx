
import React from "react";
import ReactDOM from "react-dom";
// react library for routing

// bootstrap rtl for rtl support page
import "../src/assets/vendor/bootstrap-rtl/bootstrap-rtl.scss";
// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
// plugins styles downloaded
import "../src/assets/vendor/fullcalendar/dist/fullcalendar.min.css";
import "../src/assets/vendor/sweetalert2/dist/sweetalert2.min.css";
import "../src/assets/vendor/select2/dist/css/select2.min.css";
import "../src/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// core styles
import "../src/assets/style.css";


import { Provider } from 'react-redux';
import App from "./app";
import configureStore from "./React-Redux/store";
// import 'bootstrap/dist/css/bootstrap.min.css';


export async function initApp() {
  const store = configureStore();
  
  
    ReactDOM.render(
      <Provider store={store}>
      <>
        <App />
      </>
      </Provider>,
      document.getElementById("root") as HTMLDivElement
    );
  }
  
  initApp();
  