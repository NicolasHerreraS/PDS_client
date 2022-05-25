import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import routes from "./config/routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.Layout>
                <route.component></route.component>
              </route.Layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
