import axios from "axios";

import { useEffect } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

export default function AdminPage() {
  const { currentUser } = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    try {
      // check if token is valid, if not generate an axios error
      axios.get(`${import.meta.env.VITE_API_URL}/api/auth/checkauth`, {
        withCredentials: true, // enable credentials here to allow express to read cookies
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  // if user is not an admin, redirect to page "/"
  if (currentUser && currentUser.role !== "admin") {
    return navigate("/");
  }

  return (
    // if user role is valid allow user to see this page
    <h1>Admin page</h1>
  );
}
