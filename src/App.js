import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="container">
                  <img src={logo} alt="Logo" className="logo" />
                  <TodoForm />
                  <TodoList />
                </div>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
