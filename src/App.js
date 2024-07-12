import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={
              <div className="container">
                <TodoForm />
                <TodoList />
              </div>
            } />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
