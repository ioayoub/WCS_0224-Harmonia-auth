import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/auth/checkauth`, {
          withCredentials: true,
        })
        .then((response) => setCurrentUser(response.data.user));
    } catch (e) {
      setCurrentUser(null);
    }
  }, []);

  return (
    <main>
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">logout</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <p>Votre nom est : {currentUser?.firstname}</p>
      <Outlet context={{ currentUser, setCurrentUser }} />
    </main>
  );
}

export default App;
