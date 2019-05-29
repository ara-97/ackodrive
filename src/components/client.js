// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";

// import Layout from "./Layout";
// import createStore from "../store";

// const store = createStore( window.REDUX_DATA );

// const jsx = (
//     <ReduxProvider store={ store }>
//         <Router>
//             <Layout />
//         </Router>
//     </ReduxProvider>
// );

// const app = document.getElementById( "app" );
// ReactDOM.hydrate( jsx, app );
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";

const app = document.getElementById( "app" );
ReactDOM.hydrate( <Layout />, app );