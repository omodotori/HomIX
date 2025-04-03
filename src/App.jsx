import React, { useEffect, useState, useCallback } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/navbar/navbar";
import Home from "./Components/home/Home";
import Register from "./Components/register/register";
import Login from "./Components/login/login";
import Contacts from "./Components/contacts/contacts";
import Loader from "./Components/loader/loader";
import Recommend from "./Components/recommend/Recommend";
import Footer from "./Components/footer/Footer";
import AdDetails from "./Components/adDetails/AdDetails";

const App = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("current_theme") || "light"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const saveThemeToLocalStorage = useCallback(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  useEffect(() => {
    saveThemeToLocalStorage();
  }, [theme, saveThemeToLocalStorage]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoaderContainer />;

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} exact />
          <Route path="/ads" element={<Recommend theme={theme} />} />
          <Route path="/ads/:id" element={<AdDetails />} />
          <Route
            path="/profile"
            element={
              isAuthenticated ? <UserProfile /> : <Navigate to="/login" />
            }
          />
          <Route path="/register" element={<Register theme={theme} />} />
          <Route path="/login" element={<Login theme={theme} />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        {Footer && <Footer theme={theme} />}
      </div>
    </Router>
  );
};

const LoaderContainer = () => (
  <div className="container">
    <Loader />
  </div>
);

const UserProfile = () => <div>Профиль пользователя</div>;

export default App;
