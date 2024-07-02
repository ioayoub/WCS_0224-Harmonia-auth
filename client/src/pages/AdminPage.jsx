import axios from "axios";

import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function AdminPage() {
  const { currentUser } = useOutletContext();

  useEffect(() => {
    try {
      // check if token is valid, if not generate an axios error
      axios.get(`${import.meta.env.VITE_API_URL}/api/auth/checkauth`, {
        withCredentials: true, // Enable sending cookies with the request
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return currentUser && currentUser.role === "admin" ? (
    // if user role is valid allow user to see this page
    <h1>Admin page</h1>
  ) : (
    // You can also redirect user to another route here
    <Link to="/login">Login</Link>
  );
}
