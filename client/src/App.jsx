import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import fetchAuth from "./lib/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchAuth().then((response) => setCurrentUser(response));
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
